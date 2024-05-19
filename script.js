// 1 what is reactjs?

// React is a library for web and native user interface which was developed by facebook

// library means koi ek particular feature ke liye ek library use karna like gsap for animation

// vaise hi reactjs ek library h jiski help se hum frontend develop karte h.

// =========================================================

// library vs framework

// library is used for a single feature, ex- home
// framework is a structured way isme frontend backend sb kuch include hota h, ex- plot

// angular is a framework

// react jb tk library thi ye bs clientside rendring karti thi client side mtlb user jahan se dekh rha hoga rendering kar rha hoga ,keh sakte h ki sirf frontend ka part hota tha

// pr ab reactjs nextjs ke sath merge ho chuki h , nextjs ek complete framework h , to ab react ke pass power aa chuki h ki wo client side rendering as well as server side rendering bhi kar sakti h

// ======================================
// for run react
// npm run dev

// ========================================

// 2. jsx - javascript xml
// jsx javascript or html ka combination h
// 

// ===========================================
// 3. Real dom vs Virtual dom

// Real dom : hum html me code body ke andar likhte h pr html us code ko domtree se samjhta h

// Real dom 

// 1 window
// 2 html
// 3 body
//                    4 div
//          elem1              elem2
//      h1     p   btn          img

// agar me yahan h1 ko change karti hu to pura ka pura domtree update/reload hota h

// Virtual dom : Virtual dom bina reload kiye update kardeta h

// vo is code ki multiple copy banayega jaise copy 1 or copy2 
// agar ham 1 update karte h to wo compare karega kya copy 1 or copy2 same h
// copy1 = copy2 agar h to bo h1 ko (update) kardega or sara domtree ko (reload) hone se rok lega.

// react jo h wo pura virtual dom pr kaam karta h.

// ab hum website me direct changes karne ki jageh react ke through changes karenge agar direct kiya bhi to theek se kaam nhi karega. kiyuki react ek library h jise frontend banane ke liye use karte h.

// =================================

// 4 UseState Hook (Variable of react) 
// react ke andar variables hum useState Hook ki help se banate h.
// useState ko phele import karna padta h.ye important h bina iske useState nhi chalega.

// =================================================

// 5 Breaking the components(importance of components)

// hum agar sara code page.js me likhenge to sb kachra(rush) ho jayega isiliye Components banate h.
// Components ya jis bhi naam ka folder banaynege uska first word capital me hona jaruri h or iske andar ki file pr bhi same rule apply hota h.

// then these all files we connect with page.js as a tag.

//-->  props -  koi data parents se child ki taraf flow kar rhe ho or ye lega in the form of props.

// 1.useStateSnippet se value denge 
// 2 use ek variable me save karenge
// 3.use variable ki help se Header wali files me dikha denge. (props.variable name)


// ===========================================================

// 6.Routing in react - app.js ke andar folder create karke usme page.js ki same file banate h,
// then ye folder ko link tag (same like a tag) ,jiske liye link ko import karte h ( import Link from 'next/link') fir link ke through conncet kiya jata h page.js ke andar 

// =============================================

// 7.implimenting ajax in react (Axios)

// Axios = api ko call karne ka kaam karta h
//API = Application Proggraming Interface
// api applications/softwares ke bich me commutication karne ka kaam karti h
// example - kabutar(api)

// for this use - npm i axios  (api ko use karne ka kaam karega)
// 



