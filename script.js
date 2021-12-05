//Játékosnév szövegmezők
function textbox() {
  document.getElementById("textboxes").innerHTML = "";
  let a = document.getElementById("playerNum").value;
    for (i = 1; i <= a; i++) 
    {
      let textbox = document.createElement("input");   
      textbox.type = "text";
      textbox.id = "nameBox" + i;
      textbox.style.width = "100px";
      textbox.value = "Játékos" + i;
      document.getElementById("textboxes").appendChild(textbox);
    }
}

//Mely beállítások jelenlenek meg
function competitiveMode()
{
  let competitiveButton = document.getElementById("comptetitive");
  if(competitiveButton.checked==true)
  {
    let otherSettingsDiv = document.getElementById("otherSettings");
    if(otherSettingsDiv.style.display = "block")
    {
      otherSettingsDiv.style.display = "none";
    }else{
      otherSettingsDiv.style.display = "none";
    }
  }
}

function practiceMode()
{
  let practiceButton = document.getElementById("practice");
  if(practiceButton.checked==true)
  {
    let otherSettingsDiv = document.getElementById("otherSettings");
    if(otherSettingsDiv.style.display = "none")
    {
      otherSettingsDiv.style.display = "block";
    } else{
      otherSettingsDiv.style.display = "block";
    }
  }
}

//kártya alap pakli
//number = how many shapes are on the card
//shape = 0: rombusz, 1: teglalap, 2: hullam
//color = 0: zold, 1: lila, 2: piros
let cards = [
  {number: 1, shape: 0, color: 0, img: 1}, //1 zold rombusz
  {number: 1, shape: 1, color: 0, img: 2}, //1 zold teglalap
  {number: 1, shape: 2, color: 0, img: 3}, //1 zold hullam
  
  {number: 1, shape: 2, color: 1, img: 4}, //1 lila hullam
  
  {number: 1, shape: 0, color: 2, img: 5}, //1 piros rombusz
  {number: 1, shape: 1, color: 2, img: 6}, //1 piros teglalap
  {number: 1, shape: 2, color: 2, img: 7}, //1 piros hullam
  
  {number: 1, shape: 0, color: 1, img: 8}, //1 lila rombusz
  {number: 1, shape: 1, color: 1, img: 9}, //1 lila teglalap
  
  {number: 2, shape: 0, color: 0, img: 10}, //2 zold rombusz
  {number: 2, shape: 1, color: 0, img: 11}, //2 zold teglalap
  
  {number: 3, shape: 0, color: 0, img: 12}, //3 zold rombusz 
  {number: 3, shape: 1, color: 0, img: 13}, //3 zold teglalap
  {number: 3, shape: 2, color: 0, img: 14}, //3 zold hullam
  
  {number: 3, shape: 0, color: 1, img: 15}, //3 lila rombusz
  {number: 3, shape: 1, color: 1, img: 16}, //3 lila teglalap
  {number: 3, shape: 2, color: 1, img: 17}, //3 lila hullam
  
  {number: 3, shape: 0, color: 2, img: 18}, //3 piros rombusz
  {number: 3, shape: 1, color: 2, img: 19}, //3 piros teglalap
  {number: 3, shape: 2, color: 2, img: 20}, //3 piros hullam
  
  {number: 2, shape: 2, color: 0, img: 21}, //2 zold hullam
  
  {number: 2, shape: 0, color: 1, img: 22}, //2 lila rombusz
  {number: 2, shape: 1, color: 1, img: 23}, //2 lila teglalap
  {number: 2, shape: 2, color: 1, img: 24}, //2 lila hullam

  {number: 2, shape: 2, color: 2, img: 25}, //2 piros hullam
  {number: 2, shape: 0, color: 2, img: 26}, //2 piros rombusz
  {number: 2, shape: 1, color: 2, img: 27}, //2 piros teglalap
]

let getAllImages = [];
//Ha a start-ra kattintunk
function startGame(){
  let t = document.getElementById("textboxes").innerHTML;
  if(t=="")
  {
    alert("Hiba! Kérlek állítsd be a játékosok számát.")
  }
  else
  {
    let elem = document.getElementById('homePage');
    elem.style.display = 'none';
    let elem2 = document.getElementById('gamePage');
    elem2.style.display = 'block';
    tableCreate();
    console.log(cards);
    nameButtons();

    getAllImages = document.getElementsByTagName('img');
    for (let i = 0; i < getAllImages.length; i++) {
      (function(x) {
        getAllImages[x].addEventListener('click', function() 
        {
          imgSrc = this.getAttribute('src');
          imageClicked.push(imgSrc);   
        })
      }(i))
    }
  }
  isThereSet();
}

//A játéktábla
function tableCreate(){
  let body = document.body,
      tbl  = document.createElement('table');
  tbl.style.marginLeft = "auto";
  tbl.style.marginRight = "auto";
  tbl.id = "cardTable";
  shuffle(cards);
  let count=0;

  for(let i = 0; i < 3; i++){
    let tr = tbl.insertRow();
    for(let j = 0; j < 4; j++){
      let td = tr.insertCell();
      td.id = cards[count].img;
      let img = document.createElement('img');
      let cardNo = cards[count].img + ".svg";
      img.src = cardNo;
      img.width="150";
      img.height="200";
      td.appendChild(img);
      count++;
    }
  }
  body.appendChild(tbl);
}

//Pakli összekeverés
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Játékosnevek megjelenítése gombként a játék oldalán
//Pontok a játékosnevek mellé
let points=[];
function nameButtons() {
  document.getElementById("playerNames").innerHTML = "";
  let a = document.getElementById("playerNum").value;
    for (i = 1; i <= a; i++) {
      let nameBtn = document.createElement("button");   
      let nameBoxNum = "nameBox" + i;
      let t = document.getElementById(nameBoxNum);
      nameBtn.textContent = t.value;
      nameBtn.id = "nameBtn" + i;
      nameBtn.addEventListener("click", nameClick, false);
      document.getElementById("playerNames").appendChild(nameBtn);

      let pP = document.createElement("span");
      points[i-1] = 0;
      pP.innerHTML = " Pontok: " + points[i-1] + " ";
      pP.id = "playerScore" + i;
      document.getElementById("playerNames").appendChild(pP);

      if(i==5)
      {
        let breakk = document.createElement("br");
        document.getElementById("playerNames").appendChild(breakk);
      }
    }

  
  
}

//Ha rákattintott egy játékos a nevére
let imageClicked = [];
let imgSrc;
let timeleft;
let buttonClickedId;

let playerId;
let secondsLabel;

let minutesLabel;
let totalSeconds;

function nameClick()
{
  //Pontszám
  buttonClickedId = event.srcElement.id;

  let bcidtoNum = buttonClickedId.match(/\d/g);
  bcidtoNum = bcidtoNum.join("");
  playerId = parseInt(bcidtoNum);

  let changePoint = document.getElementById("playerScore" + playerId);
  changePoint.innerHTML = " Pontok: " + points[playerId-1] + " ";

  let a = document.getElementById("playerNum").value;
  if(a==1)
  {
    document.getElementById("nameBtn1").disabled = "true";
    let table = document.getElementById("cardTable");
    table.style.pointerEvents = "auto";
    let children = document.querySelectorAll("#cardTable tr td");
    for(let i=0; i<children.length; i++) {
      children[i].addEventListener("click", cardOnClick, false);
    }

    if(document.getElementById("practice").checked==true)
    {
    }else if(document.getElementById("comptetitive").checked==true){
      document.getElementById("countdown").innerHTML = 'Eltelt idő: <label id="minutes">00</label>:<label id="seconds">00</label>';
      minutesLabel = document.getElementById("minutes");
      secondsLabel = document.getElementById("seconds");
      totalSeconds = 0;
      setInterval(setTime, 1000);
    }
  }else{
    timeleft = 10;
    let downloadTimer = setInterval(function(){
    if(timeleft <= 0)
    {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Következő játékos!";
      let table = document.getElementById("cardTable");
      table.style.pointerEvents = "none";

      imageClicked = [];
      openedCards = [];
      helperArray = [];
      filteredArray = [];
      getAllImages = [];
      children =  [];
  
      let t = document.getElementById("cardTable");
      let trs = t.getElementsByTagName("tr");
      let tds = null;
  
      for (let i=0; i<trs.length; i++)
      {
        tds = trs[i].getElementsByTagName("td");
        for (let j=0; j<tds.length;j++)
        {
            tds[j].style.backgroundColor = "white";
        }
      }
    } 
    else {
    document.getElementById("countdown").innerHTML = timeleft + " másodperc van hátra";
    let table = document.getElementById("cardTable");
    table.style.pointerEvents = "auto";
    }
    timeleft -= 1;
  }, 1000);
  let children = document.querySelectorAll("#cardTable tr td");
  for(let i=0; i<children.length; i++) {
    children[i].addEventListener("click", cardOnClick, false);
  }
  }
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}


let openedCards = [];
function cardOnClick(){
  this.style.backgroundColor = '#2e2e2e';
  openedCards.push(this);
  let len = openedCards.length;
  if(len === 3){
  sortingArray();
  }
}

let helperArray = [];
let filteredArray = [];
function sortingArray(){
  for(let i=0; i<3; ++i)
  {
    let txt = imageClicked[i];
    let numb = txt.match(/\d/g);
    numb = numb.join("");
    let theNum = parseInt(numb);
    imageClicked[i] = theNum;
  }

  for(let i=0; i<cards.length; ++i)
  {
    if(imageClicked[0] == cards[i].img)
    {
      helperArray[i] = cards[i];
    }else if(imageClicked[1] == cards[i].img)
    {
      helperArray[i] = cards[i];
    } else if(imageClicked[2] == cards[i].img)
    {
      helperArray[i] = cards[i];
    }else{}
  }
  filteredArray = helperArray.filter(function (el) {
    return el != null;
  });

  isSet();
}

let removeByAttr = function(arr, attr, value){
  let i = arr.length;
  while(i--){
     if( arr[i] 
         && arr[i].hasOwnProperty(attr) 
         && (arguments.length > 2 && arr[i][attr] === value ) ){
         arr.splice(i,1);
     }
  }
  return arr;
}



function isSet(){
  let sameNum1;
  let sameNum2;
  let sameNum5;
  let sameColor1;
  let sameColor2;
  let sameColor5;
  let sameShape1;
  let sameShape2;
  let sameShape5;
  
  let isSetNum;
  let isSetColor;
  let isSetShape;
  
  //SZAMOK
    if(filteredArray[0].number == filteredArray[1].number)
    {
      sameNum1 = true;
    }else{
      sameNum1=false;
    }
    if(filteredArray[1].number == filteredArray[2].number)
    {
      sameNum2 = true;
    }else{
      sameNum2 = false;
    }
    if(filteredArray[0].number == filteredArray[2].number)
    {
      sameNum5 = true;
    }else{
      sameNum5 = false;
    }
  
    if((sameNum1==true) && (sameNum2==true) && (sameNum5==true))
    {
      isSetNum = true;
    } else if((sameNum1==false) && (sameNum2==false) && (sameNum5==false))
    {
      isSetNum = true;
    } else
    {
      isSetNum = false;
    } 
  
  
  
  //SZINEK
    if(filteredArray[0].color == filteredArray[1].color)
    {
      sameColor1 = true;
    }else{
      sameColor1=false;
    }
    if(filteredArray[1].color == filteredArray[2].color)
    {
      sameColor2 = true;
    }else{
      sameColor2 = false;
    }
    if(filteredArray[0].color == filteredArray[2].color)
    {
      sameColor5 = true;
    }else{
      sameColor5 = false;
    }
  
    if((sameColor1==true) && (sameColor2==true) && (sameColor5==true))
    {
      isSetColor = true;
    } else if((sameColor1==false) && (sameColor2==false) && (sameColor5==false))
    {
      isSetColor = true;
    } else
    {
      isSetColor = false;
    } 
  
  
  //FORMAK
    if(filteredArray[0].shape == filteredArray[1].shape)
    {
      sameShape1 = true;
    }else{
      sameShape1=false;
    }
    if(filteredArray[1].shape == filteredArray[2].shape)
    {
      sameShape2 = true;
    }else{
      sameShape2 = false;
    }
    if(filteredArray[0].shape == filteredArray[2].shape)
    {
      sameShape5 = true;
    }else{
      sameShape5 = false;
    }
    
  
    if((sameShape1==true) && (sameShape2==true) && (sameShape5==true))
    {
      isSetShape = true;
    } else if((sameShape1==false) && (sameShape2==false) && (sameShape5==false))
    {
      isSetShape = true;
    } else
    {
      isSetShape = false;
    } 

  ///SET????
  //Ha set, akkor
    if((isSetColor==true) && (isSetNum==true) && (isSetShape==true))
    {
      if(cards.length>3)
      {
      //konzolra, alertbe kiírja
      console.log("igen,set");
      alert("Gratulálok! Találtál egy SET-et!");

      //végigmegyünk a 3 set kártyán
      for(let i=0; i<3; ++i)
      {
        //megkeressük a cardsban(eredeti, shuffled pakli) az "id"-t (ami az img)
        const found  = cards.find(x => x.img === filteredArray[i].img).img;
        //megkeressük az ehhez tartozó indexet
        const indexOfTheCards = cards.findIndex(x => x.img === found);
        //egyből ki is töröljük a tömbből
        delete(cards[indexOfTheCards]);

        //megkeressük a képhez tartozó td-t
        let keresettTdId = document.getElementById(found);
        //kitöröljük a tdben levő dolgokat
        keresettTdId.innerHTML = "";

        cards = cards.filter(function (el) {
          return el != null;
        });
        console.log(cards);
      }

      let allTdIds = [];
      
      //megkeressük a td-knek az id-jeit
      for(let i=0; i<12; ++i)
      {
        let tdsInTable = document.getElementsByTagName('td');
        let convertible = tdsInTable[i].id;
        let tdId = parseInt(convertible);
        allTdIds[i] = tdId;
      }

      let nincsBenne = [];
      let benneVan = [];
      let count =0;
      let count2=0;

      //aztán a táblában levő id-kről eldöntjük, hogy benne vannak e a cardsban vagy sem

      for(let i=0; i<12; ++i)
      {
        let found = false;
        for(let j = 0; j < cards.length; j++) {
            if (cards[j].img == allTdIds[i]) {
                found = true;
                break;
            }
        }
        if(found)
        {
          benneVan[count2] = allTdIds[i];
          count2++;
          
        }
        else{
          nincsBenne[count] = allTdIds[i];
          count++;
        }

      }

      let beillesztendo = 0;
      let count3 = 0;
      let beillesztendoTomb = [];

      beillesztendoTomb = cards.slice();

      for(let i=0; i<benneVan.length; ++i)
      {
        removeByAttr(beillesztendoTomb, 'img', benneVan[i]);
      }

      if(beillesztendoTomb.length!=0){
        for(let w=0; w<3; w++)
          {
          
            let newImg = document.createElement('img');
            let cardNo = beillesztendoTomb[w].img + ".svg";
            newImg.src = cardNo;
            newImg.width="150";
            newImg.height="200";
            //és a td id-jét is átírjuk
            let akeresettid = document.getElementById(nincsBenne[w]);
            akeresettid.id = beillesztendoTomb[w].img;
            //belerajuk a tdbe a képet
            akeresettid.appendChild(newImg);
            //itt meg az újonnan létrehozott képhez hozzáadjuk az eventlistenert
            getAllImages = document.getElementsByTagName('img');
            for (let m = 0; m < getAllImages.length; m++) {
              (function(x) {
                getAllImages[x].addEventListener('click', function() {
                  imgSrc = this.getAttribute('src');
                  //ha még nem létezik, mert újra átmegyünk az összesen és csak arra teszünk eventlistenert amit most hoztnuk létre
                  if(imageClicked.includes(imgSrc))
                  {
                  }else{
                    imageClicked.push(imgSrc);   
                  }
                })
              }(m))
            }
              
          }
        }
      } else if(cards.length==3)
      {
        alert("Nyertél!");
        let t = document.getElementById("cardTable");
        let trs = t.getElementsByTagName("tr");
        let tds = null;
      
        for (let i=0; i<trs.length; i++)
        {
            tds = trs[i].getElementsByTagName("td");
            for (let j=0; j<tds.length;j++)
            {
                tds[j].innerHTML = "";
            }
        }
          console.log("igen,set");
          alert("Gratulálok! Találtál egy SET-et!");

          //végigmegyünk a 3 set kártyán
          for(let i=0; i<3; ++i)
          {
            //megkeressük a cardsban(eredeti, shuffled pakli) az "id"-t (ami az img)
            const found  = cards.find(x => x.img === filteredArray[i].img).img;
            //megkeressük az ehhez tartozó indexet
            const indexOfTheCards = cards.findIndex(x => x.img === found);
            //egyből ki is töröljük a tömbből
            delete(cards[indexOfTheCards]);

            //megkeressük a képhez tartozó td-t
            let keresettTdId = document.getElementById(found);
            //kitöröljük a tdben levő dolgokat
            keresettTdId.innerHTML = "";

            cards = cards.filter(function (el) {
              return el != null;
            });
          }

          let allTdIds = [];
          //megkeressük a td-knek az id-jeit
          for(let i=0; i<12; ++i)
          {
            let tdsInTable = document.getElementsByTagName('td');
            let convertible = tdsInTable[i].id;
            let tdId = parseInt(convertible);
            allTdIds[i] = tdId;
          }

          let nincsBenne = [];
          let benneVan = [];
          let count =0;
          let count2=0;

          //aztán a táblában levő id-kről eldöntjük, hogy benne vannak e a cardsban vagy sem

          for(let i=0; i<12; ++i)
          {
            let found = false;
            for(let j = 0; j < cards.length; j++) {
                if (cards[j].img == allTdIds[i]) {
                    found = true;
                    break;
                }
            }
            //benne vannak = benneVan tömb
            if(found)
            {
              benneVan[count2] = allTdIds[i];
              count2++;
              
            }
            //nincsenek benne = nincsBenne tömb
            else{
              nincsBenne[count] = allTdIds[i];
              count++;
            }

          }

          let beillesztendo = 0;
          let count3 = 0;
          let beillesztendoTomb = [];

          beillesztendoTomb = cards.slice();

          for(let i=0; i<benneVan.length; ++i)
          {
            removeByAttr(beillesztendoTomb, 'img', benneVan[i]);
          }

          if(beillesztendoTomb.length!=0){
            for(let w=0; w<3; w++)
              {
              
                    let newImg = document.createElement('img');
                    let cardNo = beillesztendoTomb[w].img + ".svg";
                    newImg.src = cardNo;
                    newImg.width="150";
                    newImg.height="200";
                  //és a td id-jét is átírjuk
                  let akeresettid = document.getElementById(nincsBenne[w]);
                  akeresettid.id = beillesztendoTomb[w].img;
                  //belerajuk a tdbe a képet
                  akeresettid.appendChild(newImg);

                  //itt meg az újonnan létrehozott képhez hozzáadjuk az eventlistenert
                  getAllImages = document.getElementsByTagName('img');
                  for (let m = 0; m < getAllImages.length; m++) {
                  (function(x) {
                    getAllImages[x].addEventListener('click', function() {
                      imgSrc = this.getAttribute('src');
                      //ha még nem létezik, mert újra átmegyünk az összesen és csak arra teszünk eventlistenert amit most hoztnuk létre
                      if(imageClicked.includes(imgSrc))
                      {
                          //continue;
                      }else{
                        imageClicked.push(imgSrc);   
                      }
                    })
                    }(m))
                  }
                  
              }
          }
      }

        //Pontszám
        let changePoint = document.getElementById("playerScore" + playerId);
        changePoint.innerHTML = " Pontok: " + ++points[playerId-1] + " ";
    } else
    {
      console.log("nem set");
      alert("Sajnos ez nem volt egy SET.");

      let changePoint = document.getElementById("playerScore" + playerId);
      changePoint.innerHTML = " Pontok: " + --points[playerId-1] + " ";
    }

    //Tömbök kinullázása, felkészülés az újabb találgatásokra
    imageClicked = [];
    openedCards = [];
    helperArray = [];
    filteredArray = [];
    getAllImages = [];
    children =  [];
    beillesztendoTomb = [];
    benneVan = [];
    nincsBenne = [];
    allTdIds=[];
    
  
    let t = document.getElementById("cardTable");
    let trs = t.getElementsByTagName("tr");
    let tds = null;
  
    for (let i=0; i<trs.length; i++)
    {
        tds = trs[i].getElementsByTagName("td");
        for (let j=0; j<tds.length;j++)
        {
            tds[j].style.backgroundColor = "white";
        }
    }
    isThereSet();

    timeleft = 0;
}

let allTheCardsDownId;
let allTheCardsDown;
let cardCnt;
let cardCnt2;
let megLeteznek;
let marNemLeteznek;
let ind;
let ind2;
let found2;
function isThereSet()
{
  allTheCardsDownId = [];
  let t = document.getElementById("cardTable");
  let trs = t.getElementsByTagName("tr");
  let tds = null;
  cardCnt = 0;
  for(let i=0; i<3; ++i)
  {
    tds = trs[i].getElementsByTagName("td");
    for(let j=0; j<4; ++j)
    {
      allTheCardsDownId[cardCnt] = tds[j].id;
      cardCnt++;
    }
  }

  allTheCardsDown = [];
  filterCardsDown = [];

  filteredArray = helperArray.filter(function (el) {
    return el != null;
  });

  for(let i=0; i<allTheCardsDownId.length; ++i)
  {
    for(let j=0; j<cards.length; ++j)
    {
      if(allTheCardsDownId[i] == cards[j].img)
      {
        filterCardsDown[i] = cards[j];
      }
    }
  }
  

  allTheCardsDown = filterCardsDown.filter(function (el) {
    return el != null;
  });


  if(cards.length<12)
  {
    megLeteznek=[];
    marNemLeteznek=[];
    ind = 0;
    ind2=0;
    for(let i=0; i<allTheCardsDownId.length; ++i)
    {
      let found2 = false;
      for(let j = 0; j < cards.length; j++) {
          if (cards[j].img == allTheCardsDownId[i]) {
                  found2 = true;
                  break;
              }
          }
          if(found2)
          {
            megLeteznek[ind] = allTheCardsDownId[i];
            ind++;
            
          }
          else{
            marNemLeteznek[ind2] = allTheCardsDownId[i];
            ind2++;
          }
    }

    allTheCardsDownId = [];


    for(let i=0; i<megLeteznek.length; ++i)
    {
      allTheCardsDownId[i] = megLeteznek[i];
    }
  }

  let sameNum3;
  let sameNum4;
  let sameNum6;
  let sameColor3;
  let sameColor4;
  let sameColor6;
  let sameShape3;
  let sameShape4;
  let sameShape6;
  
  let isSetNum2;
  let isSetColor2;
  let isSetShape2;

  let thereIsSet;

  for(let i=0; i<allTheCardsDown.length; ++i)
  {
    for(let j=1; j<allTheCardsDown.length-1; ++j)
    {
      for(let k=2; k<allTheCardsDown.length-2; ++k)
      {
        //SZAMOK
        if(allTheCardsDown[i].number == allTheCardsDown[j].number)
        {
          sameNum3 = true;
        }else{
          sameNum3=false;
        }

        if(allTheCardsDown[j].number == allTheCardsDown[k].number)
        {
          sameNum4 = true;
        }else{
          sameNum4 = false;
        }

        if(allTheCardsDown[i].number == allTheCardsDown[k].number)
        {
          sameNum6 = true;
        }else{
          sameNum6 = false;
        }
      
        if((sameNum3==true) && (sameNum4==true) && (sameNum6==true))
        {
          isSetNum2 = true;
        } else if((sameNum3==false) && (sameNum4==false) && (sameNum6==false))
        {
          isSetNum2 = true;
        } else
        {
          isSetNum2 = false;
        } 

        //SZINEK
        if(allTheCardsDown[i].color == allTheCardsDown[j].color)
        {
          sameColor3 = true;
        }else{
          sameColor3=false;
        }
        if(allTheCardsDown[j].color == allTheCardsDown[k].color)
        {
          sameColor4 = true;
        }else{
          sameColor4 = false;
        }
        if(allTheCardsDown[i].color == allTheCardsDown[k].color)
        {
          sameColor6 = true;
        }else{
          sameColor6 = false;
        }
      
        if((sameColor3==true) && (sameColor4==true) && (sameColor6==true))
        {
          isSetColor2 = true;
        } else if((sameColor3==false) && (sameColor4==false) && (sameColor6==false))
        {
          isSetColor2 = true;
        } else
        {
          isSetColor2 = false;
        } 

        //FORMAK
        if(allTheCardsDown[i].shape == allTheCardsDown[j].shape)
        {
          sameShape3 = true;
        }else{
          sameShape3 = false;
        }
        if(allTheCardsDown[j].shape == allTheCardsDown[k].shape)
        {
          sameShape4 = true;
        }else{
          sameShape4 = false;
        }
        if(allTheCardsDown[i].shape == allTheCardsDown[k].shape)
        {
          sameShape6 = true;
        }else{
          sameShape6 = false;
        }
      
        if((sameShape3==true) && (sameShape4==true) && (sameShape6==true))
        {
          isSetShape2 = true;
        } else if((sameShape3==false) && (sameShape4==false) && (sameShape6==false))
        {
          isSetShape2 = true;
        } else
        {
          isSetShape2 = false;
        } 

        if((isSetColor2==true) && (isSetNum2==true) && (isSetShape2==true))
        {
          thereIsSet = true;
          break;
        }
      }
    }
  }

  if(thereIsSet==true)
  {
    console.log("Van SET");
  }else{
    alert("Nincs SET. Játék vége!");
    console.log("Nincs SET. Játék vége!");
    gameOver=true;

    let table = document.getElementById("cardTable");
    table.style.pointerEvents = "none";

    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.disabled = "true";
    }
  }
}