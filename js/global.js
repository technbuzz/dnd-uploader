(function(){
    var dropZone = document.getElementById('drop-zone');

    var startUpload = function(files){
        console.log(files);
        
    }
    
    dropZone.ondragover = function(e){
        e.preventDefault();
        this.classList.add('drop') 

    }

    dropZone.ondrop = function(e){
        e.preventDefault();
        this.classList.remove('drop');
        console.log(e.dataTransfer.files);  
        
    }

    dropZone.ondragleave = function(){
        
        this.classList.remove('drop');
    }
})();