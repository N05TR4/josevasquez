API VHM de Consulta (API-2026-001)
Especificación de implementación de los 2 servicios de consulta de vehículos.

1. Endpoints
Obtener Vehículo por RNC y Placa — GET /api/v1/rnc/{rnc}/placa/{placa}

Obtener Vehículo por Chasis — GET /api/v1/chasis/{chasis}

Ambos devuelven la misma estructura de respuesta: propietario + vehiculo + matricula + oposiciones[].

2. Información técnica y seguridad
Conexión a base de datos: TAXCHOC (Oracle).

Autenticación: header x-api-key.

Formato: JSON, Content-Type: application/json.

Fechas: se devuelven como string en formato YYYY-MM-DD.

3. Arquitectura de la solución
La respuesta se compone de 3 fuentes:

propietario → API externa de contribuyentes (info-detallada).

vehiculo + matricula → cascada de 3 queries sobre TAXCHOC.

oposiciones[] → query independiente sobre TAXCHOC.

4. Objeto propietario (API info-detallada)
Endpoint: GET https://apimdevint.dgii.gov.do:30640/contribuyente/v2/rnc/{rnc}/info-detallada

Header: x-api-key: 7765f830dee64380923c7af9da74dae6 (ambiente dev interno)

Parámetro: el mismo {rnc} del servicio.

Mapeo de cada campo:

rncCedula → rncCedula

nombreRazonSocial → razonSocial si es persona jurídica (codigoTipoPersona = 2); si es persona física (= 1): nombreContribuyente + " " + apellidosContribuyente

direccion → direcciones[] con esPrincipal = 1, campo .direccion (aplicar TRIM)

telefono → telefonos[] con esPrincipal = 1, campo .telefono (fallback: celulares[])

correo → correos[] con esPrincipal = 1, campo .correo (fallback: correoElectronicoContribuyente)

esGobierno → true si codigoTipoSociedad == 10 (NO LUCRATIVA ESTATAL); en caso contrario false

5. Objeto vehiculo + matricula (cascada de 3 queries)
El servicio consulta en orden y responde con el primer query que devuelva registro:

01-PLACADEFINITIVA.sql → si hay registro, responde y termina.

02-PLACAPROVISIONAL.sql → solo si el paso 1 no devolvió registro.

03-PLACAEXHIBICION.sql → solo si los pasos 1 y 2 no devolvieron registro.

Los 3 queries exponen el mismo contrato de salida (alias = nombres del JSON). El mapeo del resultado al DTO se hace por nombre de alias (Dapper). PLACADEFINITIVA expone además idVehiculo, usado para consultar oposiciones.

Fuente de cada campo por camino
Formato: campo — DEFINITIVA · PROVISIONAL · EXHIBICION

chasis — rpv_num_chassi · pdd.numero_chasis · rpe_num_chassi

placa — rpv_placa · NULL · NULL

placaAnterior — rpv_reg_anterior · NULL · rpe_placa_anterior

placaProvisionalExhibicion — COALESCE(exhib, prov) · ppa.placa · rpe_placa

estadoPlacaProvisionalExhibicion — CASE (ver §6) · CASE (ver §6) · CASE (ver §6)

vigenciaPlacaProvisionalExhibicion — COALESCE(...) · ppa.fecha_expiracion · rpe_fec_expiracion

marca — tma_descripcion (igual en los 3 caminos)

modelo — tmo_descripcion (igual en los 3 caminos)

color — tab_generica tipo 67 (igual en los 3 caminos)

tipo — tcv_descripcion (igual en los 3 caminos)

anioFabricacion — rpv_ano_fabr · pdd.ano_fabricacion · rpe_ano_fabr

cantidadPasajeros — rpv_capac · pdd.numero_pasajeros · rpe_capac_pasajeros

numeroPuertas — rpv_num_puertas · pdd.numero_puertas · rpe_num_puertas

estadoVehiculo — tab_generica tipo 293 · opcional (se omite) · opcional (se omite)

estadoRenovacionMarbete — CASE marbete (ver §6) · opcional (se omite) · opcional (se omite)

codigo (matrícula) — CASE renavan / sec_matricula · opcional (se omite) · opcional (se omite)

tipoEmision — tab_generica tipo 292 · opcional (se omite) · opcional (se omite)

fechaEmision — rpv_fec_expedicion · ppa.fecha_expedicion · rpe_fec_expedicion

fechaInscripcion — rpv_fec_inscripcion · ppa.fecha_asignacion · rpe_fec_asignacion

Todas las columnas de fecha son tipo DATE en Oracle; se entregan con TO_CHAR(...,'YYYY-MM-DD').

Campos opcionales
En los caminos PROVISIONAL y EXHIBICION estos 4 campos no aplican y se omiten del JSON:

vehiculo.estadoVehiculo

vehiculo.estadoRenovacionMarbete

matricula.codigo

matricula.tipoEmision

6. Valores de los campos de estado
estadoPlacaProvisionalExhibicion
Camino EXHIBICION:

PLACA DESCARGADA

PLACA SOLICITADA

PLACA ASIGNADA VIGENTE

PLACA ASIGNADA VENCIDA

PLACA ANULADA

Camino PROVISIONAL:

PPE ASIGNADA

PPE ANULADA

PPE ASIGNADA VIGENTE

PPE ASIGNADA VENCIDA

estadoRenovacionMarbete (solo DEFINITIVA)
NO APLICA (clases de vehículo 5 y 12)

SIN RENOVAR (sin registro de marbete)

Descripción de tab_generica tipo 725 según el estado del marbete

estadoVehiculo (solo DEFINITIVA)
Descripción de tab_generica tipo 293 según rpv_situacion.

7. Objeto oposiciones[]
Array de strings. Se consulta solo en el camino DEFINITIVA, usando idVehiculo (rpv_rge_ruc). No aplica en PROVISIONAL ni EXHIBICION.



SELECT tov.tov_descripcion AS descripcion

FROM ruc_vehiculo_oposiciones rvo

INNER JOIN tab_oposicion_vehiculos tov

    ON tov.tov_cod_oposicion = rvo.rvo_tov_cod_oposicion

WHERE rvo.rvo_riv_rge_ruc   = :idVehiculo

  AND rvo.rvo_fec_cesacion IS NULL

ORDER BY rvo.rvo_fec_oposicion;

8. Ejemplo de respuesta (200 OK)


{

  "propietario": {

    "rncCedula": "130000000",

    "nombreRazonSocial": "EMPRESA EJEMPLO SRL",

    "direccion": "AV. PRINCIPAL 100, ENS. EJEMPLO",

    "telefono": "8090000000",

    "correo": "contacto@ejemplo.com",

    "esGobierno": false

  },

  "vehiculo": {

    "chasis": "1ABCD23EFGH456789",

    "placa": "A123456",

    "placaAnterior": "A987654",

    "placaProvisionalExhibicion": "EXH001234",

    "estadoPlacaProvisionalExhibicion": "PLACA ASIGNADA VIGENTE",

    "vigenciaPlacaProvisionalExhibicion": "2026-12-31",

    "marca": "MARCA EJEMPLO",

    "modelo": "MODELO EJEMPLO",

    "color": "GRIS",

    "tipo": "AUTOMOVIL PRIVADO",

    "anioFabricacion": 2021,

    "cantidadPasajeros": 5,

    "numeroPuertas": 4,

    "estadoVehiculo": "ACTIVO",

    "estadoRenovacionMarbete": "RENOVADO",

    "oposiciones": ["PROCESO LEGAL", "ADMINISTRATIVA"]

  },

  "matricula": {

    "codigo": "00123456",

    "tipoEmision": "CORRIENTE",

    "fechaEmision": "2021-03-15",

    "fechaInscripcion": "2021-03-10"

  }

}


Respuesta de error - 400 Bad Request

{
    "errors": [
        {
            "code": "API-450",
            "message": "RNC o Cedula ingresado es invalido"
        },
        {
            "code": "API-451",
            "message": "Placa ingresada es invalida"
        }
    ]
}

Respuesta de error - 401 Unauthorized
{
    "errors": [
        {
            "code": "API-401",
            "message": "Acceso restringido"
        }
    ]
}

Los campos condicionales se omiten del JSON cuando no aplican (no se devuelven como null).

9. Archivos de referencia
01-PLACADEFINITIVA.sql — query paso 1 de la cascada:
--------------------------------------------------------------------------------
-- CASCADA paso 1 de 3: PLACA DEFINITIVA
-- Orden de consulta del servicio: 1) DEFINITIVA  2) PROVISIONAL  3) EXHIBICION
-- Si esta query devuelve registro, se responde y NO se consultan las siguientes.
-- Aplica a ambos endpoints (RNC+placa / chasis).
--
-- Fechas: formateadas con TO_CHAR(...,'YYYY-MM-DD') para mantener consistencia
--         con los queries de fallback (PROVISIONAL / EXHIBICION).
--------------------------------------------------------------------------------
WITH tg_color AS (
    SELECT tge_cod_tip_tabla, tge_nombre_descripcion
    FROM tab_generica
    WHERE tge_tip_tabla = 67
      AND tge_cod_tip_tabla > 0
),
tg_estado AS (
    SELECT tge_cod_tip_tabla, tge_nombre_descripcion
    FROM tab_generica
    WHERE tge_tip_tabla = 293
      AND tge_cod_tip_tabla > 0
),
tg_tipo_emision AS (
    SELECT tge_cod_tip_tabla, tge_nombre_descripcion
    FROM tab_generica
    WHERE tge_tip_tabla = 292
      AND tge_cod_tip_tabla > 0
),
tg_marbete AS (
    SELECT tge_cod_tip_tabla, tge_nombre_descripcion
    FROM tab_generica
    WHERE tge_tip_tabla = 725
      AND tge_cod_tip_tabla > 0
),
marbete AS (
    SELECT dm.numero_correlativo,
           dm.estado,
           tg.tge_nombre_descripcion AS estado_marbete
    FROM datamatrix_marbete dm
    LEFT JOIN tg_marbete tg
        ON tg.tge_cod_tip_tabla = dm.estado
    WHERE dm.activo = 3
),
placa_exhibicion AS (
    SELECT rpe.rpe_num_chassi,
           rpe.rpe_placa,
           rpe.rpe_fec_expiracion,
           CASE
               WHEN rpe.rpe_rge_solicitante = '130000001' AND rpe.rpe_situacion IN (1,2,3)
                   THEN 'PLACA DESCARGADA'
               WHEN rpe.rpe_situacion = 1 AND rpe.rpe_num_autoriz_saldo IS NULL
                   THEN 'PLACA SOLICITADA'
               WHEN rpe.rpe_situacion = 2 AND rpe.rpe_fec_expiracion > TRUNC(SYSDATE)
                   THEN 'PLACA ASIGNADA VIGENTE'
               WHEN rpe.rpe_situacion = 2
                   THEN 'PLACA ASIGNADA VENCIDA'
               WHEN rpe.rpe_situacion = 3
                   THEN 'PLACA ANULADA'
           END estado
    FROM ruc_placas_exhibicion_sticker rpe
),
placa_provisional AS (
    SELECT pdd.numero_chasis,
           ppa.placa,
           ppa.fecha_expiracion,
           CASE
               WHEN ppa.situacion = 1 AND ppa.fecha_expedicion IS NULL
                   THEN 'PPE ASIGNADA'
               WHEN ppa.situacion = 2
                   THEN 'PPE ANULADA'
               WHEN ppa.situacion = 3 AND ppa.fecha_expiracion > TRUNC(SYSDATE)
                   THEN 'PPE ASIGNADA VIGENTE'
               WHEN ppa.situacion = 3
                   THEN 'PPE ASIGNADA VENCIDA'
           END estado
    FROM placa_dga_declaracion_det pdd
    JOIN placa_autorizaciones pa ON pa.solicitud_id = pdd.id_enc
    JOIN placa_provisional_asignada ppa ON ppa.id_det = pdd.id_det
    WHERE pa.estado = 2
      AND pa.pago_id = 1
)

SELECT
    rvh.rpv_rge_ruc                                       AS idVehiculo,

    -- ===== VEHICULO =====
    rvh.rpv_num_chassi                                    AS chasis,
    rvh.rpv_placa                                         AS placa,
    rvh.rpv_reg_anterior                                  AS placaAnterior,

    COALESCE(pe.rpe_placa, pp.placa)                      AS placaProvisionalExhibicion,
    COALESCE(pe.estado, pp.estado)                        AS estadoPlacaProvisionalExhibicion,
    TO_CHAR(COALESCE(pe.rpe_fec_expiracion, pp.fecha_expiracion), 'YYYY-MM-DD')
                                                          AS vigenciaPlacaProvisionalExhibicion,

    tm.tma_descripcion                                    AS marca,
    tmod.tmo_descripcion                                  AS modelo,
    tg_color.tge_nombre_descripcion                       AS color,
    tcv.tcv_descripcion                                   AS tipo,

    rvh.rpv_ano_fabr                                      AS anioFabricacion,
    rvh.rpv_capac                                         AS cantidadPasajeros,
    rvh.rpv_num_puertas                                   AS numeroPuertas,

    tg_estado.tge_nombre_descripcion                      AS estadoVehiculo,

    CASE
        WHEN rvh.rpv_tcv_cod_clase IN (5,12)
            THEN 'NO APLICA'
        WHEN marbete.estado_marbete IS NULL
            THEN 'SIN RENOVAR'
        ELSE marbete.estado_marbete
    END                                                   AS estadoRenovacionMarbete,

    -- ===== MATRICULA =====
    CASE
        WHEN rvh.rpv_tipo_matricula = 4
            THEN rvh.rpv_num_renavan
        ELSE TO_CHAR(rvh.rpv_sec_matricula)
    END                                                   AS codigo,

    tg_tipo_emision.tge_nombre_descripcion                AS tipoEmision,
    TO_CHAR(rvh.rpv_fec_expedicion, 'YYYY-MM-DD')         AS fechaEmision,
    TO_CHAR(rvh.rpv_fec_inscripcion, 'YYYY-MM-DD')        AS fechaInscripcion

FROM ruc_ipva rvh

LEFT JOIN tab_marcas_vehiculos tm
    ON tm.tma_cod_marca = rvh.rpv_cod_marca

LEFT JOIN tab_model_vehiculos tmod
    ON tmod.tmo_tma_cod_marca = rvh.rpv_cod_marca
   AND tmod.tmo_cod_model = rvh.rpv_cod_marca_modl

LEFT JOIN tg_color
    ON tg_color.tge_cod_tip_tabla = rvh.rpv_cod_color

LEFT JOIN tg_estado
    ON tg_estado.tge_cod_tip_tabla = rvh.rpv_situacion

LEFT JOIN tg_tipo_emision
    ON tg_tipo_emision.tge_cod_tip_tabla = rvh.rpv_tipo_matricula

LEFT JOIN marbete
    ON marbete.numero_correlativo = rvh.rpv_rge_ruc

-- TODO (tecnico): ROWNUM = 1 dentro de un JOIN no se comporta como "primera fila";
--                 conviene moverlo a subquery correlacionado o filtrar por tcv_situacion = 1.
LEFT JOIN tab_clase_vehiculos tcv
    ON tcv.tcv_cod_clase = rvh.rpv_tcv_cod_clase
   AND RowNum = 1

LEFT JOIN placa_exhibicion pe
    ON pe.rpe_num_chassi = rvh.rpv_num_chassi

LEFT JOIN placa_provisional pp
    ON pp.numero_chasis = rvh.rpv_num_chassi

INNER JOIN ruc_relacion_profesional rrp
    ON rrp.rrp_tipo_relacion = 30
   AND rrp.rrp_fecha_fin_participacion IS NULL
   AND rrp.rrp_ruc_profesional = rvh.rpv_rge_ruc

-- ===== Criterio de Entrada No. 1: Obtener Vehiculo por RNC y Placa =====
--   GET /api/v1/rnc/{rnc}/placa/{placa}
WHERE rrp.rrp_ruc_contribuyente = :rnc
  AND rvh.rpv_placa             = :placa;

-- ===== Criterio de Entrada No. 2: Obtener Vehiculo por Chasis =====
--   GET /api/v1/chasis/{chasis}
--   (mismo SELECT/JOINs de arriba; reemplazar el WHERE anterior por este)
--WHERE rvh.rpv_num_chassi = :chasis;

02-PLACAPROVISIONAL.sql — query paso 2 de la cascada:
--------------------------------------------------------------------------------
-- CASCADA paso 2 de 3: PLACA PROVISIONAL
-- Solo se ejecuta si PLACA DEFINITIVA (paso 1) no devolvio registro.
-- Si devuelve registro, se responde y NO se consulta EXHIBICION (paso 3).
--
-- NOTA: estos campos llegan NULL en este camino (ver reporte a arquitectura):
--       estadoVehiculo, estadoRenovacionMarbete, codigo, tipoEmision.
-- Fechas: ya formateadas con TO_CHAR(...,'YYYY-MM-DD').
--------------------------------------------------------------------------------
SELECT
    pdd.numero_chasis AS chasis,
    NULL              AS placa,
    NULL              AS placaAnterior,
    ppa.placa         AS placaProvisionalExhibicion,
    CASE
        WHEN ppa.situacion = 1 AND ppa.fecha_expedicion IS NULL
            THEN 'PPE ASIGNADA'
        WHEN ppa.situacion = 2
            THEN 'PPE ANULADA'
        WHEN ppa.situacion = 3 AND ppa.fecha_expiracion > TRUNC(SYSDATE)
            THEN 'PPE ASIGNADA VIGENTE'
        WHEN ppa.situacion = 3
            THEN 'PPE ASIGNADA VENCIDA'
    END               AS estadoPlacaProvisionalExhibicion,

    TO_CHAR(ppa.fecha_expiracion, 'YYYY-MM-DD') AS vigenciaPlacaProvisionalExhibicion,
    tm.tma_descripcion AS marca,
    tmod.tmo_descripcion AS modelo,
    tg.tge_nombre_descripcion AS color,
    tcv.tcv_descripcion AS tipo,

    pdd.ano_fabricacion AS anioFabricacion,
    pdd.numero_pasajeros AS cantidadPasajeros,
    pdd.numero_puertas AS numeroPuertas,

    NULL AS estadoVehiculo,
    NULL AS estadoRenovacionMarbete,
    NULL AS codigo,
    NULL AS tipoEmision,

    TO_CHAR(ppa.fecha_expedicion, 'YYYY-MM-DD') AS fechaEmision,
    TO_CHAR(ppa.fecha_asignacion, 'YYYY-MM-DD') AS fechaInscripcion

FROM placa_dga_declaracion_det pdd

LEFT JOIN tab_marcas_vehiculos tm
       ON tm.tma_cod_marca = pdd.rpv_cod_marca

LEFT JOIN tab_model_vehiculos tmod
       ON tmod.tmo_tma_cod_marca = pdd.rpv_cod_marca
      AND tmod.tmo_cod_model     = pdd.rpv_cod_marca_modl

LEFT JOIN tab_generica tg
       ON tg.tge_tip_tabla = 67
      AND tg.tge_cod_tip_tabla = pdd.rpv_cod_color
      AND tg.tge_cod_tip_tabla > 0

-- TODO (tecnico): ROWNUM = 1 dentro de un JOIN no se comporta como "primera fila".
LEFT JOIN tab_clase_vehiculos tcv
       ON tcv.tcv_cod_clase = pdd.rpv_tcv_cod_clase
      AND ROWNUM = 1

JOIN placa_autorizaciones pa
  ON pa.solicitud_id = pdd.id_enc
 AND pa.estado = 2
 AND pa.pago_id = 1

JOIN placa_provisional_asignada ppa
  ON ppa.id_det = pdd.id_det
 AND ppa.tipo_proceso = 1

-- ===== Criterio de Entrada No. 1: por RNC y Placa =====
 WHERE ppa.ruc_rge_beneficiario = :rnc
   AND ppa.placa = :placa;

-- ===== Criterio de Entrada No. 2: por Chasis =====
--WHERE pdd.numero_chasis = :chasis;

03-PLACAEXHIBICION.sql — query paso 3 de la cascada.
--------------------------------------------------------------------------------
-- CASCADA paso 3 de 3: PLACA EXHIBICION
-- Solo se ejecuta si DEFINITIVA (paso 1) y PROVISIONAL (paso 2) no devolvieron registro.
--
-- NOTA: estos campos llegan NULL en este camino (ver reporte a arquitectura):
--       estadoVehiculo, estadoRenovacionMarbete, codigo, tipoEmision.
-- Fechas: ya formateadas con TO_CHAR(...,'YYYY-MM-DD').
--------------------------------------------------------------------------------
SELECT
    rpe.rpe_num_chassi AS chasis,
    NULL AS placa,
    rpe.rpe_placa_anterior AS placaAnterior,
    rpe.rpe_placa AS placaProvisionalExhibicion,

    CASE
        WHEN rpe.rpe_rge_solicitante = '130000001'
             AND rpe.rpe_situacion IN (1, 2, 3)
        THEN 'PLACA DESCARGADA'

        WHEN rpe.rpe_situacion = 1
             AND rpe.rpe_num_autoriz_saldo IS NULL
             AND rpe.rpe_rge_solicitante <> '130000001'
        THEN 'PLACA SOLICITADA'

        WHEN rpe.rpe_situacion = 2
             AND rpe.rpe_num_autoriz_saldo IS NOT NULL
             AND rpe.rpe_fec_expedicion IS NOT NULL
             AND rpe.rpe_fec_expiracion IS NOT NULL
             AND rpe.rpe_rge_solicitante <> '130000001'
        THEN CASE
                 WHEN rpe.rpe_fec_expiracion >= TRUNC(SYSDATE)
                 THEN 'PLACA ASIGNADA VIGENTE'
                 ELSE 'PLACA ASIGNADA VENCIDA'
             END

        WHEN rpe.rpe_situacion = 3
        THEN 'PLACA ANULADA'
    END AS estadoPlacaProvisionalExhibicion,

    TO_CHAR(rpe.rpe_fec_expiracion, 'YYYY-MM-DD') AS vigenciaPlacaProvisionalExhibicion,
    tm.tma_descripcion AS marca,
    tmod.tmo_descripcion AS modelo,
    tg.tge_nombre_descripcion AS color,
    tcv.tcv_descripcion AS tipo,

    rpe.rpe_ano_fabr AS anioFabricacion,
    rpe.rpe_capac_pasajeros AS cantidadPasajeros,
    rpe.rpe_num_puertas AS numeroPuertas,

    NULL AS estadoVehiculo,
    NULL AS estadoRenovacionMarbete,
    NULL AS codigo,
    NULL AS tipoEmision,

    TO_CHAR(rpe.rpe_fec_expedicion, 'YYYY-MM-DD') AS fechaEmision,
    TO_CHAR(rpe.rpe_fec_asignacion, 'YYYY-MM-DD') AS fechaInscripcion

FROM ruc_placas_exhibicion_sticker rpe

LEFT JOIN tab_marcas_vehiculos tm
       ON tm.tma_cod_marca = rpe.rpe_cod_marca

LEFT JOIN tab_model_vehiculos tmod
       ON tmod.tmo_tma_cod_marca = rpe.rpe_cod_marca
      AND tmod.tmo_cod_model     = rpe.rpe_cod_marca_modl

LEFT JOIN tab_generica tg
       ON tg.tge_tip_tabla = 67
      AND tg.tge_cod_tip_tabla = rpe.rpe_cod_color
      AND tg.tge_cod_tip_tabla > 0

-- TODO (tecnico): ROWNUM = 1 dentro de un JOIN no se comporta como "primera fila".
LEFT JOIN tab_clase_vehiculos tcv
       ON tcv.tcv_cod_clase = rpe.rpe_tcv_cod_clase
      AND ROWNUM = 1

WHERE rpe.rpe_situacion IN (1, 2, 3)

-- ===== Criterio de Entrada No. 1: por RNC y Placa =====
  AND rpe.rpe_rge_beneficiario = :rnc
  AND rpe.rpe_placa = :placa;

-- ===== Criterio de Entrada No. 2: por Chasis =====
--  AND rpe.rpe_num_chassi = :chasis;



Nota importante: Solo trabaja el endpoint: Obtener Vehículo por RNC y Placa — GET /api/v1/rnc/{rnc}/placa/{placa}. Debes dejar seteado la posibilidad de mas adelante agregar el endpoint Obtener Vehículo por Chasis — GET /api/v1/chasis/{chasis} que consuma estos mismos queries y servicios