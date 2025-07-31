# 📊 **MANUAL DE USUARIO - KONTROL**
## *Sistema de Gestión de Inventario Profesional*

<div align="center">

![Kontrol](https://img.shields.io/badge/Kontrol-v1.0.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
![Estado](https://img.shields.io/badge/Estado-Estable-green?style=for-the-badge)
![Plataforma](https://img.shields.io/badge/Plataforma-Windows-lightgrey?style=for-the-badge)

</div>

---

**¡Bienvenido a Kontrol!** 🎉  
Este manual te guiará paso a paso para dominar todas las funcionalidades del sistema de gestión de inventario más completo y fácil de usar.

> **Versión del Manual:** 1.0.0  
> **Fecha:** Julio 2025  
> **Compatibilidad:** Windows 10/11

---

## � **TABLA DE CONTENIDOS**

1. [🚀 Inicio Rápido](#-inicio-rápido)
2. [🏠 Interfaz Principal](#-interfaz-principal)
3. [📦 Gestión de Productos](#-gestión-de-productos)
4. [🔄 Registro de Movimientos](#-registro-de-movimientos)
5. [📊 Sistema de Reportes](#-sistema-de-reportes)
6. [🔒 Sistema de Respaldos](#-sistema-de-respaldos)
7. [⚙️ Configuración y Mantenimiento](#️-configuración-y-mantenimiento)
8. [❓ Preguntas Frecuentes](#-preguntas-frecuentes)
9. [📞 Soporte y Contacto](#-soporte-y-contacto)

---

## 🚀 **INICIO RÁPIDO**

### **Requisitos del Sistema**
- **Sistema Operativo:** Windows 10 o superior
- **RAM:** Mínimo 2GB (Recomendado 8GB)
- **Espacio en Disco:** 500MB libres
- **Resolución:** 1024x768 mínimo (Recomendado 1920x1080)

### **Primera Ejecución**

1. **📁 Extrae el archivo** descargado en una carpeta de tu preferencia
2. **🖱️ Ejecuta** `Kontrol.exe` haciendo doble clic
3. **⏱️ Espera** a que la aplicación inicialice (primera vez puede tardar 30-60 segundos)
4. **✅ ¡Listo!** Ya puedes comenzar a usar Kontrol

> **💡 Tip:** La aplicación es completamente portable. Puedes moverla a cualquier carpeta o dispositivo USB sin problemas.

---

## 🏠 **INTERFAZ PRINCIPAL**

Al abrir Kontrol, verás el **Panel de Control** principal con:

### **📊 Resumen Rápido**
- **Total de Productos:** Número de productos activos en tu inventario
- **Stock Total:** Suma de todas las unidades disponibles
- **Movimientos Hoy:** Actividad del día actual

### **🧭 Navegación Principal**
- **📦 Productos:** Gestión completa del catálogo
- **🔄 Movimientos:** Registro de entradas y salidas
- **📊 Reportes:** Análisis y estadísticas empresariales

### **🎨 Personalización**
- **Acerca de K:** Información de la aplicación y enlaces útiles
- **🔒 Respaldos:** Sistema automático de protección de datos

---

## 📦 **GESTIÓN DE PRODUCTOS**

El módulo de productos es el corazón de tu inventario. Aquí administras todo tu catálogo.

### **➕ Agregar Nuevo Producto**

1. **🖱️ Navega** a la sección **"Productos"** desde el menú principal
2. **➕ Haz clic** en el botón **"Agregar Producto"**
3. **📝 Completa** el formulario:

   | Campo | Descripción | Obligatorio |
   |-------|-------------|-------------|
   | **Nombre** | Identificación única del producto | ✅ Sí |
   | **Miniatura** | Imagen del producto (archivo local) | ❌ No |

4. **💾 Presiona** **"Guardar"** para crear el producto

> **💡 Consejo:** Usa nombres descriptivos y únicos. Ejemplo: "Laptop Dell Inspiron 15-3000" en lugar de solo "Laptop"

### **✏️ Editar Producto Existente**

1. **🔍 Localiza** el producto en la tabla
2. **✏️ Haz clic** en el ícono de edición (lápiz)
3. **📝 Modifica** los campos necesarios
4. **💾 Guarda** los cambios

> **⚠️ Importante:** Los cambios se aplican inmediatamente y afectan todo el historial del producto.

### **🗑️ Eliminar Producto**

1. **🔍 Busca** el producto en la lista
2. **🗑️ Presiona** el botón de eliminación
3. **⚠️ Confirma** la acción en el diálogo que aparece

> **🚨 Advertencia:** Esta acción marca el producto como inactivo pero conserva su historial. No se puede deshacer.

### **🔍 Búsqueda y Filtros**

- **Búsqueda en tiempo real:** Escribe en la barra superior para filtrar productos
- **Ordenamiento:** Haz clic en los encabezados de columna para ordenar
- **Vista de stock:** Los productos con stock bajo aparecen resaltados

---

## 🔄 **REGISTRO DE MOVIMIENTOS**

El sistema de movimientos registra todas las entradas y salidas de tu inventario, manteniendo trazabilidad completa.

### **📥 Entradas (Compras / Reposición)**

Las entradas aumentan tu stock disponible.

**📋 Proceso paso a paso:**

1. **🖱️ Ve** a la sección **"Movimientos"**
2. **📥 Selecciona** la pestaña **"Entrada"**
3. **📝 Completa** el formulario:

   ```
   ┌─────────────────────────────────────┐
   │ 📦 Producto: [Seleccionar...]      │
   │ 🔢 Cantidad: [Unidades a ingresar] │
   │ 💰 Precio: [Costo por unidad]      │
   │ 📝 Descripción: [Motivo/Proveedor]  │
   └─────────────────────────────────────┘
   ```

4. **👁️ Revisa** la información de stock proyectado
5. **✅ Haz clic** en **"Registrar Entrada"**

> **💡 Ejemplo práctico:** Compraste 50 unidades de "Mouse Inalámbrico" a $15 c/u del proveedor TechStore.

### **📤 Salidas (Ventas / Gastos)**

Las salidas reducen tu stock y pueden ser ventas o gastos internos.

**📋 Proceso paso a paso:**

1. **📤 Cambia** a la pestaña **"Salida"**
2. **🔄 Selecciona** el tipo de salida:
   - **🛒 Salida Simple:** Un solo producto
   - **📦 Salida Grupal:** Múltiples productos en una transacción

3. **📝 Para salida simple:**
   - Selecciona producto, cantidad y precio de venta
   - Agrega descripción (cliente, motivo, etc.)
   - Registra la operación

4. **📦 Para salida grupal:**
   - Agrega productos uno por uno con el botón **"➕ Agregar"**
   - Revisa la lista de productos agregados
   - Verifica el total de la transacción
   - Confirma el registro grupal

### **⚠️ Sistema de Validaciones**

- **Stock insuficiente:** No puedes vender más de lo que tienes
- **Precios negativos:** El sistema no permite precios menores a cero
- **Stock proyectado:** Visualiza cómo quedará tu inventario después del movimiento
- **Alertas de stock bajo:** Notificaciones cuando el stock esté crítico

### **🔍 Historial de Movimientos**

**Filtros disponibles:**
- **📅 Por fecha:** Rango específico de fechas
- **🏷️ Por tipo:** Entradas, salidas o ambos
- **📦 Por producto:** Movimientos de un producto específico

**Acciones disponibles:**
- **👁️ Ver detalle:** Información completa del movimiento
- **✏️ Editar:** Modificar movimientos existentes
- **🗑️ Eliminar:** Remover movimientos (con confirmación)

---

## 📊 **SISTEMA DE REPORTES**

Los reportes te brindan información valiosa para la toma de decisiones empresariales.

### **📅 Reporte Diario**

Obtén un análisis completo de la actividad diaria.

**🔍 Información incluida:**
- **💰 Ventas totales del día**
- **📦 Productos más vendidos**
- **📈 Utilidad bruta generada**
- **🔄 Número total de movimientos**
- **📊 Tabla detallada de todas las transacciones**

**📋 Cómo generar:**
1. **📊 Ve** a **"Reportes"** → **"Diario"**
2. **📅 Selecciona** la fecha deseada
3. **🔍 Haz clic** en **"Generar Reporte"**
4. **📄 Exporta** a PDF si necesitas compartir

### **🗓️ Reporte Mensual**

Análisis completo del rendimiento mensual de tu negocio.

**🔍 Métricas incluidas:**
- **📈 Resumen de movimientos por producto**
- **📊 Días con mayor actividad**
- **💹 Tendencias de ventas mensuales**
- **⚡ Indicadores de rendimiento**
- **🎯 Comparativas con períodos anteriores**

**📋 Cómo generar:**
1. **🗓️ Selecciona** la pestaña **"Mensual"**
2. **🎯 Elige** año y mes específicos
3. **📈 Analiza** las métricas presentadas
4. **📊 Exporta** el reporte completo

### **🔍 Historial por Producto**

Seguimiento detallado del ciclo de vida de cada producto.

**📋 Información disponible:**
- **📈 Gráfico de movimientos en el tiempo**
- **💰 Precio promedio de compra y venta**
- **📊 Stock máximo y mínimo histórico**
- **🔄 Frecuencia de rotación**
- **📅 Períodos de mayor demanda**

**📋 Cómo consultar:**
1. **🔍 Ve** a **"Historial Producto"**
2. **📦 Selecciona** el producto de interés
3. **📅 Define** rango de fechas (opcional)
4. **📊 Analiza** la información presentada

### **📄 Exportación a PDF**

Todos los reportes pueden exportarse a PDF profesional con:
- **🎨 Logo corporativo del negocio**
- **📊 Gráficos y tablas bien formateadas**
- **📅 Fecha y hora de generación**
- **🔍 Filtros aplicados claramente identificados**

---

## 🔒 **SISTEMA DE RESPALDOS** ⭐ NUEVO

Kontrol incluye un sistema automático de respaldos para proteger tus datos de forma inteligente.

### **🤖 Respaldos Automáticos**

**⚙️ Configuración predeterminada:**
- **🕐 Frecuencia:** Diario automático
- **📁 Ubicación:** `%APPDATA%\Kontrol\backups\`
- **🗄️ Retención:** Últimos 30 respaldos
- **🧹 Limpieza:** Automática de archivos antiguos

### **📋 Gestión Manual de Respaldos**

**🔍 Acceso al panel:**
1. **🏠 Desde el menú principal** haz clic en **"↻"**
2. **🖱️ Se abrirá** el modal de gestión profesional

**✨ Funciones disponibles:**

#### **💾 Crear Respaldo Manual**
```
┌─────────────────────────────────────┐
│ ✅ Crear respaldo inmediato         │
│ 📅 Con fecha y hora actual          │
│ 🏷️ Etiquetado como "manual"         │
└─────────────────────────────────────┘
```

#### **📋 Lista de Respaldos**
- **📅 Fecha y hora** de cada respaldo
- **🏷️ Tipo** (automático/manual)
- **📊 Tamaño** del archivo
- **⚡ Acciones** (restaurar/eliminar)

#### **🔄 Restaurar Respaldo**
1. **📋 Selecciona** el respaldo deseado
2. **🔄 Haz clic** en **"Restaurar"**
3. **⚠️ Confirma** la acción
4. **💾 El sistema** crea un respaldo de seguridad antes de restaurar

> **🚨 Importante:** La restauración reemplaza todos los datos actuales con los del respaldo seleccionado.

### **📁 Ubicación de Respaldos**

**🖥️ En Windows:**
```
C:\Users\[TuUsuario]\AppData\Roaming\Kontrol\backups\
```

**🔍 Acceso rápido:**
1. **⊞ Win + R** → escribe `%APPDATA%\Kontrol\backups`
2. **📁 Presiona Enter** para abrir la carpeta

### **🔧 Resolución de Problemas**

| Problema | Solución |
|----------|----------|
| 📁 No veo la carpeta AppData | Habilita "Mostrar archivos ocultos" en el Explorador |
| 🚫 Error al crear respaldo | Verifica permisos de escritura en la carpeta |
| ⚠️ Respaldo corrupto | Usa un respaldo anterior o contacta soporte |

---

## ⚙️ **CONFIGURACIÓN Y MANTENIMIENTO**

### **🗃️ Archivos de Datos**

Kontrol almacena toda la información en archivos locales:

```
📁 Kontrol/
│── 📊 kontrol.db (Base de datos SQLite)
└── 📁 resources/ (Archivos del sistema)
```

### **💻 Rendimiento y Optimización**

**🚀 Para mejor rendimiento:**
- **💾 Mínimo 2GB RAM disponibles**
- **🖥️ Resolución 1920x1080 recomendada**
- **🧹 Limpia respaldos antiguos ocasionalmente**
- **📊 Exporta reportes grandes en horarios de poco uso**

### **🔄 Migración de Datos**

**📦 Para mover Kontrol a otro equipo:**
1. **📁 Copia** toda la carpeta de Kontrol
2. **🔒 Opcionalmente** incluye los respaldos de `%APPDATA%\Kontrol\`
3. **▶️ Ejecuta** en el nuevo equipo

### **🔧 Mantenimiento Preventivo**

**📅 Rutinas recomendadas:**
- **Semanal:** Revisar reportes de stock bajo
- **Mensual:** Verificar que hay respaldos recientes
- **Trimestral:** Limpiar productos inactivos obsoletos
- **Anual:** Exportar reportes históricos importantes

---

## ❓ **PREGUNTAS FRECUENTES**

### **🔍 Generales**

**P: ¿Kontrol necesita conexión a internet?**
R: No. Kontrol funciona completamente offline. Solo necesita internet para descargar actualizaciones.

**P: ¿Puedo usar Kontrol en múltiples equipos?**
R: Sí, es completamente portable. Solo copia la carpeta completa.

**P: ¿Hay límite en el número de productos?**
R: No hay límites programados. El rendimiento depende del hardware.

### **📦 Productos**

**P: ¿Puedo tener productos con el mismo nombre?**
R: No. Cada producto debe tener un nombre único para evitar confusiones.

**P: ¿Qué pasa si elimino un producto por error?**
R: El producto se marca como inactivo pero conserva su historial. Contacta soporte para recuperarlo.

### **🔄 Movimientos**

**P: ¿Puedo editar movimientos antiguos?**
R: Sí, pero ten cuidado ya que afecta el stock actual y los reportes.

**P: ¿Cómo manejo devoluciones?**
R: Registra una entrada con la cantidad devuelta y descripción clara.

### **📊 Reportes**

**P: ¿Los reportes incluyen productos inactivos?**
R: Sí, si tuvieron movimientos en el período consultado.

**P: ¿Puedo personalizar los reportes?**
R: Actualmente no, pero puedes exportar a PDF y editarlo externamente.

### **🔒 Respaldos**

**P: ¿Puedo cambiar la frecuencia de respaldos automáticos?**
R: La frecuencia está optimizada para uso normal. Para cambios contacta soporte.

**P: ¿Los respaldos incluyen las imágenes de productos?**
R: Sí, todo está incluido en el archivo de respaldo.

---

## 📞 **SOPORTE Y CONTACTO**

### **🆘 Obtener Ayuda**

**🌐 Recursos en línea:**
- **📚 Repositorio GitHub:** [github.com/CarlosDB25/Kontrol](https://github.com/CarlosDB25/Kontrol)
- **🐛 Reportar problemas:** Usar el sistema de Issues en GitHub
- **💡 Sugerencias:** Crear Feature Request en el repositorio

### **📧 Contacto Directo**

**👨‍💻 Desarrollador:** K: Carlos Diaz  
**📧 Email:** carlosdiazmaerio@gmail.com  
**🌐 GitHub:** [@CarlosDB25](https://github.com/CarlosDB25)

### **🐛 Reportar Errores**

**📋 Incluye en tu reporte:**
- **🖥️ Versión de Windows**
- **📊 Versión de Kontrol**
- **📝 Descripción detallada del problema**
- **🔄 Pasos para reproducir el error**
- **📸 Capturas de pantalla** (si aplica)

### **💡 Solicitar Funcionalidades**

¿Necesitas una función específica? ¡Contáctanos!
- **📋 Describe** claramente la funcionalidad
- **🎯 Explica** el caso de uso
- **📊 Indica** la urgencia/importancia

---

<div align="center">

### **🎉 ¡Gracias por usar Kontrol!**

*Sistema de Gestión de Inventario Profesional*

![Kontrol](https://img.shields.io/badge/Hecho%20con-❤️-red?style=for-the-badge)
![MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)

**Versión 1.0.0** | **Julio 2025**

</div>

---

## 📁 **ARCHIVOS INCLUIDOS EN ESTA DESCARGA**

```
📦 Kontrol-Portable/
├── 📄 Kontrol.exe → Aplicación principal
└── 📚 Manual de Usuario.pdf → Este manual
```

> **💡 Tip final:** Mantén este manual a mano durante tus primeros días usando Kontrol. ¡Pronto te convertirás en un experto!

---

