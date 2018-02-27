//For editing----------------
function fun_edit(evt)
      {
          var id=evt.target.id.split('_')[2];
          createNewDoc(id);
          var p_elm=document.getElementById(id).children[0];
          var p_elm_attrs_arr=p_elm.attributes;
          if(document.getElementById('new_doc_txtarea1'))
              {
                  for(var i=0;i<p_elm_attrs_arr.length;i++)
                    {
                        if(p_elm_attrs_arr[i].name!='border' && p_elm_attrs_arr[i].name!='padding' && p_elm_attrs_arr[i].name!='id')
                            {
                                document.getElementById('new_doc_txtarea1').setAttribute(p_elm_attrs_arr[i].name,p_elm_attrs_arr[i].value);
                            }
                    }
                    document.getElementById('new_doc_txtarea1').value=p_elm.innerText;
              }
      }
//Create New Document--------------------------------------------------------------------------
        var flag=0;
        function createNewDoc(t)
      {
          //t=0 means for add a note--------
          //1.creation a textarea--
          //2.creation a color selector--
          //3.creation save button----
          //4.creation of an input box for target to connect to this note if there is no target give value nothing -----
          var TEXTAREA_attr_obj={
                   id   : 'new_doc_txtarea1',
                   cols : 100,
                   rows : 20,
          }
          var c_textarea=document.createElement("TEXTAREA");
          for(var prop in TEXTAREA_attr_obj)
              {
                  c_textarea.setAttribute(prop,TEXTAREA_attr_obj[prop]);
              }
          if(document.getElementById('new_doc_txtarea1'))
              {
                //for delete old  textarea if repeated clicked  new note create button-----------
                 fun_del_textarea();
                 fun_del_select_color_option();
                 fun_del_save_button();
                 fun_del_target_input();
              }
              fun_create_save_btn(t);
              fun_create_target_input();
          var x=document.getElementById('for_new_doc');
          x.appendChild(c_textarea);
          c_textarea.focus();
      }
// For creation of save button-------------------
    function fun_create_save_btn(t)
      {
              var save_btn_attr_obj={
                   id   : 'save_btn',
               }
              var heading_tbl_row=document.getElementById('heading_tbl_row');
              var cr_td_for_save_btn=document.createElement("TD");
              var cr_save_btn=document.createElement('BUTTON');
              for(var prop in save_btn_attr_obj)
                  {
                      cr_save_btn.setAttribute(prop,save_btn_attr_obj[prop]);
                  }
              cr_save_btn.setAttribute('onclick',"fun_save("+t+");");
              cr_save_btn.innerHTML='Save';
              cr_td_for_save_btn.appendChild(cr_save_btn);
              heading_tbl_row.appendChild(cr_td_for_save_btn);
              color_option();
      }
/// For creation of input for adding target note-------------------
    function fun_create_target_input()
      {
              var target_input_obj={
                   id   : 'target_input',
                   type : 'text',
                   placeholder : 'Target Id'
               }
              var heading_tbl_row=document.getElementById('heading_tbl_row');
              var cr_td_for_save_btn=document.createElement("TD");
              var cr_target_input=document.createElement('INPUT');
              for(var prop in target_input_obj)
                  {
                      cr_target_input.setAttribute(prop,target_input_obj[prop]);
                  }
              cr_td_for_save_btn.appendChild(cr_target_input);
              heading_tbl_row.appendChild(cr_td_for_save_btn);
      }
//For save-----------------------------------------------------------------------------
function fun_save(t)
{
    //getting current date and time----
    var currentdate = new Date();
    var datetime = "Created on: " + currentdate.getDate() + "-"
          + (currentdate.getMonth()+1)  + "-"
          + currentdate.getFullYear() + " "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":"
          + currentdate.getSeconds();

    var target_input='';
  if(document.getElementById('target_input'))
      {
          target_input=document.getElementById('target_input').value;
      }
  var child=document.getElementById('render_doc').children.length;

          // For save after editing-----------
        var div_outer;
          if(t!=0)
          {
              child=t;
              div_outer=document.getElementById(t);
          }
          // For save new note-----
          else
          {
              child++;
              var div_outer=document.createElement("DIV");
          }
                  var DIV_outer_obj={
                      id : child,
                      style : 'margin:40px;float:left; width:300px;height:auto;  border:1px solid #000; border-radius:10%; text-align:center;padding:20px 20px;'
                  }
                  var P_attr_obj={
                          id    : 'p_'+child,
                  }
                  var btn_edit_attr_obj={
                          type   : 'image',
                          src    : 'images/edit2.png',
                          id     :  'edit_btn_'+child,
                          width  :  30,
                          height :  30,
                  }
                  var btn_add_attr_obj={
                          type   : 'image',
                          src    : 'images/plus4.png',
                          id     :  'add_btn_'+child,
                          width  :  30,
                          height :  30,
                  }
                  var cr_p=document.createElement("P");
                  var cr_btn_edit=document.createElement('INPUT');
                  var cr_Br_elm=document.createElement('BR');
                  for(var prop in DIV_outer_obj)
                      {
                          div_outer.setAttribute(prop,DIV_outer_obj[prop]);
                      }
                   for(var prop in P_attr_obj)
                      {
                          cr_p.setAttribute(prop,P_attr_obj[prop]);
                      }
                    for(var prop in btn_edit_attr_obj)
                      {
                          cr_btn_edit.setAttribute(prop,btn_edit_attr_obj[prop]);
                      }
                      if(document.getElementById('new_doc_txtarea1'))
                      {
                          var new_doc_attrs_arr=document.getElementById('new_doc_txtarea1').attributes;
                          for(var i=0;i<new_doc_attrs_arr.length;i++)
                          {
                            if(new_doc_attrs_arr[i].name!='rows' && new_doc_attrs_arr[i].name!='cols' && new_doc_attrs_arr[i].name!='id')
                                {
                                    cr_p.setAttribute(new_doc_attrs_arr[i].name,new_doc_attrs_arr[i].value);
                                }
                          }
                          cr_p.innerHTML=document.getElementById('new_doc_txtarea1').value;
                      }

                  cr_btn_edit.addEventListener('click',fun_edit);
                  var cr_span_elm1=document.createElement('SPAN');
                  cr_span_elm1.appendChild(cr_btn_edit);
                  var cr_span_elm3=document.createElement('SPAN');
                  cr_span_elm3.innerHTML='&nbsp;&nbsp;';
                  var cr_span_elm4=document.createElement('SPAN');
                  cr_span_elm4.innerHTML='&nbsp;&nbsp;';
                  var cr_span_elm6=document.createElement('SPAN');
                  cr_span_elm6.innerHTML='&nbsp;&nbsp;';
                  var cr_span_elm5=document.createElement('SPAN');
                  cr_span_elm5.innerHTML=datetime;

                  var cr_span_elm7=document.createElement('SPAN');
                  cr_span_elm7.innerHTML='&nbsp;&nbsp;';
                  var cr_span_elm8=document.createElement('SPAN');
                  cr_span_elm8.setAttribute('id','target_id'+child);
                  cr_span_elm8.innerHTML='Target Id: '+child;

                  if(t!=0)
                  {
                    var td_elm_to_be_deleted=document.getElementById(t);
                    while(td_elm_to_be_deleted.firstChild){
                        td_elm_to_be_deleted.removeChild(td_elm_to_be_deleted.firstChild);
                    }
                  }

                  div_outer.appendChild(cr_p);
                  div_outer.appendChild(cr_span_elm1);
                  div_outer.appendChild(cr_Br_elm);
                  div_outer.appendChild(cr_span_elm8);
                  div_outer.appendChild(cr_span_elm6);
                  div_outer.appendChild(cr_span_elm5);
                  // For new note creation-------
                  if(t==0)
                  {
                    document.getElementById('render_doc').appendChild(div_outer);
                  }
                  if(document.getElementById(target_input))
                  {
                    //alert(target_input);
                    //dynamicPath(div_outer,document.getElementById(target_input));
                  }
                  fun_del_textarea();
                  fun_del_select_color_option();
                  fun_del_save_button();
                  fun_del_target_input();
}

//For giving color option----------------------------------------------------------------
    function color_option()
      {
          var heading_tbl_row=document.getElementById('heading_tbl_row');
          var cr_td_for_select_color=document.createElement("TD");
          var cr_select_option=document.createElement("SELECT");
          cr_select_option.setAttribute('id','select_color');
          cr_select_option.addEventListener('change',funChangeColor);
          var color_arr=['red','black','green','blue','yellow'];
          color_arr.forEach(function(elm){
          var option=document.createElement('OPTION');
          option.innerHTML=elm;
          option.setAttribute('value',elm);
          cr_select_option.appendChild(option);
          });
          cr_td_for_select_color.appendChild(cr_select_option);
          heading_tbl_row.appendChild(cr_td_for_select_color);
      }
//Change color for selected text---
    function funChangeColor()
      {
          document.getElementById('new_doc_txtarea1').style.color=document.getElementById('select_color').value;
      }
//for delete the textarea---------------------------------------------------------------
      function fun_del_textarea()
      {
          if(document.getElementById('new_doc_txtarea1'))
              {
                  var txtarea=document.getElementById('new_doc_txtarea1');
                  txtarea.parentElement.removeChild(txtarea);
              }
      }
//for delete color select option--------------------------------------------------------
      function fun_del_select_color_option()
      {
          if(document.getElementById('select_color'))
             {
                var x=document.getElementById('select_color').parentElement;
                x.parentNode.removeChild(x);
             }

      }
//For delete save button----------------------------------------------------------------
      function fun_del_save_button()
      {
          if(document.getElementById('save_btn'))
              {
                var x=document.getElementById('save_btn').parentElement;
                x.parentNode.removeChild(x);
              }

      }
//For delete open button---------------------------------------------------------------
      function fun_del_Open_button()
      {
          if(document.getElementById('btn_open'))
              {
                  var x=document.getElementById('btn_open').parentElement;
                  x.parentNode.removeChild(x);
              }
      }
//For delete New Note open buton--------------------------------------------------------
      function fun_del_new_note_open_button()
      {
          if(document.getElementById('new_doc_open_btn'))
            {
              var x=document.getElementById('new_doc_open_btn').parentElement;
              x.parentNode.removeChild(x);
            }
      }
//For delete target note id placeholder input ----------------------------------------
      function fun_del_target_input()
    {
         if(document.getElementById('target_input'))
            {
              var x=document.getElementById('target_input');
              x.parentNode.removeChild(x);
            }
    }

//For deleting --------------------------------------------------------------------------
      function fun_del_existing_td_and_p(id)
      {
              if(document.getElementById(id)){
                  var td_elm=document.getElementById(id).children[0];
                  td_elm.parentNode.removeChild(td_elm);
              }
      }
