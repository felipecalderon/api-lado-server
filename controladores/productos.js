const conexion = require('../conexionsql')

exports.productos = (req, res) => {
    const sql = 'SELECT insumos_venta.codigo, insumos_venta.Nombre, insumos_venta.cod_barra, categorias.Categoria, Round(Sum(bodegas_movimientos.Entrada-bodegas_movimientos.Salida)) AS Stock, Round(insumos_venta.precio,0) AS PrecioNeto, Round(insumos_venta.precio*1.19,1) AS PrecioIVA, "" AS PrecioOferta, "" AS Fin_Oferta, insumos_venta.activo FROM (bodegas_movimientos INNER JOIN insumos_venta ON bodegas_movimientos.codigo = insumos_venta.codigo) INNER JOIN categorias ON insumos_venta.categoria = categorias.id_categoria GROUP BY insumos_venta.codigo, insumos_venta.Nombre, insumos_venta.cod_barra, categorias.Categoria, Round(precio,0), Round(precio*1.19,1), "", insumos_venta.activo, "" HAVING (((Round(Sum(bodegas_movimientos.Entrada-bodegas_movimientos.Salida)))>=0) AND ((insumos_venta.activo)="S"));';
    conexion.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Sin resultados encontrados :(');
        }
    })
}

exports.producto = (req, res) => {
    const { codigo } = req.params;
    const sql = `SELECT insumos_venta.codigo, insumos_venta.Nombre, insumos_venta.cod_barra, categorias.Categoria, Round(Sum(bodegas_movimientos.Entrada-bodegas_movimientos.Salida)) AS Stock, Round(insumos_venta.precio,0) AS PrecioNeto, Round(insumos_venta.precio*1.19,1) AS PrecioIVA, "" AS PrecioOferta, "" AS Fin_Oferta, insumos_venta.activo FROM (bodegas_movimientos INNER JOIN insumos_venta ON bodegas_movimientos.codigo = insumos_venta.codigo) INNER JOIN categorias ON insumos_venta.categoria = categorias.id_categoria GROUP BY insumos_venta.codigo, insumos_venta.Nombre, insumos_venta.cod_barra, categorias.Categoria, Round(precio,0), Round(precio*1.19,1), "", insumos_venta.activo, "" HAVING (((Round(Sum(bodegas_movimientos.Entrada-bodegas_movimientos.Salida)))>=0) AND ((insumos_venta.activo)="S") AND ((insumos_venta.codigo)=${codigo}));`;
  
    conexion.query(sql, (error, result) => {
      if (error) throw error;
  
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send('Sin resultados encontrados :(');
      }
    });
};