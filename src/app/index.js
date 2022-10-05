import * as actions from 'bundle-text:./actions/*.js'
import * as pages from 'bundle-text:./pages/**/*.html'  
import appManifest from 'bundle-text:./app.webmanifest'
 
 
pages.manifest = appManifest

if (process.env.NODE_ENV === 'development') {
    console.log('Happy developing!');
    // console.log(indexPage)
}
 
export {pages,actions}
 