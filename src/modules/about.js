function about(){
    let content=document.getElementById("content");
    let about = document.createElement('div');
    about.setAttribute('id', "about");
    let aboutTitle = document.createElement('h1');
    aboutTitle.setAttribute('id','aboutTitle');
    aboutTitle.textContent="About";
    let aboutCont = document.createElement('p');
    aboutCont.setAttribute('id',"aboutCont");
    aboutCont.textContent = "Located on the water in beautiful San Pedro. Enjoy the view of ships entering and leaving the harbor while you dine on our world famous cusine. Who knows, you may catch a glimpse of the infamous Golden Fang.";
    about.appendChild(aboutTitle);
    about.appendChild(aboutCont);
    content.appendChild(about);
}
export default about
