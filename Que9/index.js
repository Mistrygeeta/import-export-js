// Use export default to export a function that returns today’s date and import it in another file.
function getDate(){
    let today = new Date().toDateString()
    return today
}
export default  getDate