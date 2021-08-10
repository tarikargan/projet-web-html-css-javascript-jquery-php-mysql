const _ = (el) =>{return document.querySelector(el)}



_('.form-control').addEventListener('keyup',()=>{
    if(_('.form-control').value != ""){
        _('.form-control').classList.remove('border-danger');
        _('button').classList.remove('bg-danger');
        _('.form-control').classList.add('border-success');
        _('button').classList.add('bg-success');
        _('.error_msg').style.display = "none";
    }
})


_('#form_search').addEventListener('submit',(e)=>{
    e.preventDefault();

    if(_('.form-control').value != ""){
        _('#form_search').submit();

    }else{
        _('.form-control').classList.add('border-danger');
        _('button').classList.add('bg-danger');
        _('.search_area').classList.add('error');
        _('.error_msg').style.display = "block";

        setTimeout(()=>{
            _('.search_area').classList.remove('error');
        },3000);
    }
})