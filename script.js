function toggle(btn){
  const all = document.querySelectorAll(".more");
  all.forEach(box => {
    if(box !== btn.nextElementSibling){
      box.style.maxHeight = null;
    }
  });

  const content = btn.nextElementSibling;
  if(content.style.maxHeight){
    content.style.maxHeight = null;
  }else{
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
