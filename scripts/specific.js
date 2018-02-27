document.onreadystatechange = () =>
{
  if (document.readyState === 'complete')
  {
        document.getElementById('new_doc_open_btn').addEventListener('click',function(){
                createNewDoc(0);
        });

        document.getElementById('btn_open').addEventListener('click',function(){
        document.querySelector("input[type='file']").click();
        });

        document.querySelector("input[type='file']").addEventListener('change',function(){
        document.getElementById('val').text(this.value.replace(/C:\\fakepath\\/i, ''))
        });

  }
}
