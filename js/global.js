(function(){
    var dropZone = document.getElementById('drop-zone');

    document.getElementById('standard-uploader').addEventListener('click', function(e){
        e.preventDefault();
        var standarUploadFiles = document.getElementById('standard-upload-files').files;
        startUpload(standarUploadFiles);
    });

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
        startUpload(e.dataTransfer.files);  
        
    }

    dropZone.ondragleave = function(){
        
        this.classList.remove('drop');
    }
})();