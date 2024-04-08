# Classic Pocket
*Billetera virtual* - *Proyecto coderhouse, de curso de desarrollador de app*

# SQLite
- db/index.js » configuración
- app.jsx » initDatabase
- Screens/Login.jsx » saveUserSession
- Navigation/ MainNavigator.jsx » getUserSession
  
# Custom Hook
- Hooks » useContactsGet » Lista de contactos
- Hooks » useProfileGet » Perfil de usuario
- Hooks - useSessionGet » Datos de usuario

# Verificaction (yup)
- Screens/Login.jsx
- Screens/SingUp.jsx
- Validation/AuthSchema.js


<br />

# Switch condicional
- En login
- En tabs de inicio y agenda
<br />

# Fuentes importadas
- Inter
- CrimsonPro
- LibreBaskerville
- LeagueSpartan
<br />


# Skills
- React Native
<br />

# Elementos usados
- **Material Top Tabs Navigator**
- Alert » aviso de contacto agregado o borrado (Android)
- FlatList » OptimizedList.jsx
- Image
- Modal » CustomModal (componente personalizado) » para agregado y borrado de contacto
- ScrollView » en CustomModal para agregar contacto
- StyleSheet
- Switch » para destacar contacto, cambia backgroundColor del container del contactDetail.jsx
- Text
- TextInput » AddContact.jsx
- TouchableHighlight
- TouchableOpacity
- useState » para almacenar datos de input, crear contacto y borrar contacto, y cambio de backgroundColor con switch
- View

<br />

# Redux
- ContactsSlice.jsx » reduce: deleteContact » ContactDetail.jsx
- ContactsSlice.jsx » reduce: addContact » AddContact.jsx

<br />

# Navegación
- Navigation » ScreensNavigation.jsx
- Screen Stacks » Login.jsx, ScreensTabs.jsx 
- Screen Tabs » ScreensTabs.jsx » Home.jsx, ContactBook.jsx, About.jsx
- Title props » ScreensNavigaation.jsx » TopBar.jsx » "Classic Pocket", "Contactos", "Mis Datos"
- Navigation props » GoBack() » TopBar.jsx
- Navigation props » popToTop() » ContactBook.jsx » OptimizedList.jsx » AddContact.jsx
- Navigation props » navigate() » NavMenu.jsx

<br />

# Datos
ContactList.js » Datos de contactos de la agenda

# Estilos
globalStyles » estilos globales
globalColor » constantes de colores


# Wireframe
<img src="/wirerame.jpg" />
