window.addEventListener('load', function(){

    // validaciones del front formularios
    let submit = document.querySelector('button')
    let formulario = document.querySelector('form')

    // console.log("🚀 ~ file: ValidacionesFront.js ~ line 5 ~ window.addEventListener ~ submit", submit)
    
    formulario.addEventListener('submit', function(event){
        
        // event.preventDefault()

        let selloA = document.querySelector('select.selloA')
        console.log("🚀 ~ file: ValidacionesFront.js ~ line 12 ~ formulario.addEventListener ~ selloA", selloA)
        let selloB = document.querySelector('option.selloB')
        let tonoA = document.querySelector('option.tonoA')
        let tonoB = document.querySelector('option.tonoB')
        
        if(selloA.value == ""){
            event.preventDefault()
            alert('Selecciona un Sello A')
        }
        

       
    })

})

/*



 <p> <%= resA.selloA %> <b> <%= resA.selloNumA %> </b>  <%= resA.tonoA %> <b> <%= resA.tonoNumA %></b> </p>
    <p> <%= resB.selloB %> <b> <%= resB.selloNumB %> </b>  <%= resB.tonoB %> <b> <%= resB.tonoNumB %></b> </p>

*/