var nama = "dedi"
var isStudent = true

// module.exports = { nama, isStudent : true}
// module.exports = [nama,true]
module.exports = {
    nama,
    isStudent,
    kalimat: () => {
        if (isStudent){
            return nama + ' adalah student'
        }else {
            return "bukan student"
        }
    }
}