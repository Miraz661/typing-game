const timer = document.querySelector(".timer");
const testText = document.querySelector(".current-text");
const user=document.querySelector("#user-input");
const wrongScore=document.querySelector("#wrong-score");
const correctScore=document.querySelector("#correct-score");
const resultColor = document.querySelector("#current-txt");
const restart = document.querySelector("#restart");
 const scoreBoardButton = document.querySelector("#scoreBoardButton");
 const scoreBoard = document.querySelector("#scores");
 const scoreInWord = document.querySelector("#scoreInWord");
 const scoreInChar = document.querySelector("#scoreInChar");




let time_counter=6,charCounter=0;
let testTxt,correct=0,wrong=0;
let ranlen1 = Math.floor(Math.random()*20)+500;
let ranlen2 = Math.floor(Math.random()*7649)+1;
let front=0,end=0,corscore=0,wrongscore=0;
let countInterval;


const txt = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur molestias voluptatem accusamus nemo optio provident, ullam ab recusandae enim, cupiditate facilis non totam distinctio animi? Doloremque corrupti, ipsa dolorem sequi necessitatibus fuga officiis eos ad blanditiis cum vero dolorum, adipisci sapiente nulla, ipsam harum eaque amet consequatur debitis delectus ullam. Veritatis atque laborum, consectetur ex fugit eligendi et. Commodi illo dolore laborum officiis asperiores eum nobis facere exercitationem earum harum, necessitatibus consequatur, debitis iure odit impedit culpa. Sint nulla quibusdam pariatur ullam, ratione reiciendis reprehenderit amet nobis quas recusandae accusamus! Officiis, voluptate quo? Nisi laboriosam sapiente adipisci placeat quae harum ex assumenda laudantium maxime esse doloribus, aliquam molestiae odit mollitia nulla? Soluta dolores, deserunt minus placeat nemo excepturi labore accusamus earum fuga! Quibusdam, quaerat reiciendis! Placeat fuga praesentium quod quam nulla facere nemo ipsam aliquid perspiciatis beatae impedit reprehenderit vel perferendis accusamus quae voluptate, obcaecati totam non ab nobis ut asperiores dolor sunt autem? Distinctio suscipit tempora dolorem veritatis? Iste eligendi recusandae nulla totam quia natus ea optio sequi ab placeat inventore voluptas, quam temporibus possimus aliquam officia minus architecto. Minus quo, velit sapiente officiis perspiciatis at accusantium aut itaque ad non id aperiam praesentium quisquam fuga veniam sed vel odio fugit totam doloribus impedit eaque repellendus delectus architecto. Quo amet adipisci minima, quas ex doloribus dolore deserunt vero? Architecto omnis possimus illum odio iste quos corrupti eius perferendis maiores, vitae suscipit itaque consectetur veritatis, ducimus, ex obcaecati nesciunt. Cum voluptatum voluptatem aliquid! Natus, sed culpa voluptatibus doloribus odit unde ipsum vitae obcaecati commodi deserunt atque! Optio, ducimus quidem. Deserunt iure enim id dolor iste vitae. Quidem, error. Consequuntur quas possimus, ad eius quis incidunt nobis consectetur eveniet odit commodi itaque ratione consequatur maiores blanditiis suscipit perferendis placeat dolorem sit quaerat unde similique tempore? Perspiciatis, perferendis nihil. Architecto error deserunt est minus repudiandae reiciendis aut quo sint sequi quisquam quod beatae quas provident vel molestias perferendis explicabo nobis ipsam perspiciatis vitae vero accusamus eligendi, odio quasi. Molestias praesentium asperiores quas necessitatibus hic fugiat eaque tempore aspernatur odit deserunt soluta, repellendus, consectetur autem iusto quisquam non, esse voluptatem explicabo? Facere perferendis aliquid minus quod repellat? Earum doloribus vel consequatur ipsam assumenda ratione provident quaerat magnam perferendis? Id ullam, consectetur exercitationem atque quis a mollitia fuga nam hic eos soluta asperiores voluptates quos officiis veritatis culpa natus voluptatem minus non vero, error nisi animi. Minima, sunt? Blanditiis voluptates laborum eum odio beatae ea, accusamus dolorem in quasi quo nobis veritatis quod reiciendis, modi rerum expedita possimus cumque illo ab? Et eius nostrum commodi iure quaerat reprehenderit distinctio non deserunt optio corrupti deleniti, debitis sequi ullam, odit nesciunt id blanditiis cum dicta fugit temporibus excepturi. Ipsa nihil culpa adipisci libero quos corporis, dolorem laudantium ratione repudiandae incidunt totam veniam molestiae aut odio quod ea iusto consectetur. Alias doloremque mollitia neque, doloribus explicabo iste, nesciunt sapiente laudantium inventore laboriosam a praesentium sed accusamus quasi itaque? Eos quidem voluptate vero quasi ut. Quisquam voluptates, eius excepturi repudiandae deleniti quaerat distinctio dolorem dignissimos tenetur, illo laudantium rem quam odio explicabo modi natus non provident. Quasi, dicta aliquid. Est tempora soluta culpa aperiam quae veritatis placeat quod adipisci. Similique deserunt pariatur, expedita amet porro quisquam incidunt numquam nisi vero dignissimos aspernatur! Recusandae amet eligendi fuga adipisci sunt reprehenderit natus distinctio, explicabo hic magnam sint suscipit, nostrum autem? Sed modi recusandae et ut libero laboriosam, dolorem enim optio iure non, veniam perspiciatis est? Possimus odit ex cum, harum, repellat aliquid, odio exercitationem modi omnis beatae explicabo ea tempore perspiciatis eligendi sint incidunt tenetur deserunt nobis eveniet vitae reiciendis. Sequi debitis ex facilis dolores necessitatibus velit tempora suscipit, hic eveniet perspiciatis possimus aliquid nostrum, enim, cumque libero minus officiis quae. Impedit, voluptate temporibus deserunt voluptatum dolorem similique possimus quidem sint vero explicabo fuga aspernatur eum repudiandae corrupti tenetur earum tempore quo ratione, voluptates voluptatibus harum provident. Possimus laudantium consequatur odio sapiente ipsa quo aspernatur rem itaque laboriosam ipsum, dicta voluptas fugiat? Qui quidem dolorum reprehenderit repellat distinctio reiciendis delectus voluptas odio, fugit error velit officia! Ut totam earum reiciendis ad iusto aspernatur optio ea? Aperiam totam corporis, architecto nihil minima ea ex voluptatem adipisci laboriosam enim? Sint facilis adipisci officia ullam, pariatur, alias aspernatur sequi sed molestias reiciendis voluptatibus, odit corrupti quia commodi et sunt. Ipsum repellendus quos officia explicabo quod eaque totam, perferendis non quaerat! Ut quisquam nesciunt dicta cupiditate culpa earum vero, nam laudantium atque temporibus maiores consectetur, tempore id velit ullam? Dolorum architecto tenetur at minima in, iure laboriosam perspiciatis veritatis modi pariatur incidunt? Rem dolor officiis velit a eligendi doloremque voluptatibus cupiditate aut, sunt sit odit quaerat et mollitia quae cum, illum enim, quia sint fugiat ratione magnam voluptates est! Ex odio accusamus repellendus iusto consectetur quis voluptate, pariatur provident repellat? Ipsum aut cupiditate voluptas delectus praesentium similique obcaecati pariatur libero explicabo deleniti beatae culpa amet, soluta rerum dolore eum architecto itaque recusandae odio? Doloribus beatae blanditiis dolorem quisquam laborum! Rerum adipisci mollitia tempora eligendi, optio vero quod sapiente incidunt illum, quo soluta quia? Aperiam placeat rem nostrum, laborum ab, molestias quae dolorem inventore culpa esse eaque consequuntur. Natus, et repellendus in voluptate a neque. Suscipit rem eveniet perspiciatis quis eligendi, libero nam est esse odit itaque vero aliquam, impedit, soluta recusandae doloribus numquam accusantium animi iusto aliquid exercitationem. Harum odit incidunt fugiat nam nostrum reiciendis sed ex nulla aperiam mollitia? Exercitationem nesciunt, cupiditate qui soluta sint doloribus deleniti atque magnam nemo numquam sed recusandae quia esse natus, dolores rerum odit voluptate maiores enim, debitis minus neque modi optio. Ipsum incidunt numquam molestiae nihil autem dolores iste consequatur quibusdam harum, corrupti aspernatur voluptatibus accusamus dolore quam soluta exercitationem quia, fuga voluptatum doloribus vel ex aperiam excepturi, accusantium sequi. Excepturi quidem veritatis similique blanditiis maxime nemo dolor, rem laudantium, ad, ratione tenetur aperiam! Cumque eaque magnam veniam illum sapiente, laboriosam nemo tempore deleniti! Dolores, sed. Facere officia a veritatis exercitationem voluptas illum, inventore aperiam doloremque culpa, amet quidem atque eius est debitis sint optio sed consectetur. A voluptas repellendus exercitationem omnis iste aperiam iure fugit! Voluptate."


function typingGame(){
    countInterval = setInterval(()=>{
        time_counter--;
        timer.innerHTML=time_counter;
        if(time_counter<=0){
            restart.style.display="block";
            user.value="";
            user.disabled=true;
            scoreInWord.innerHTML=corscore;
            scoreInChar.innerHTML=charCounter;
            scoreBoard.style.display="block";
            clearInterval(countInterval);
        }
    },1000);
    
    
    if(ranlen2>7100){
        testTxt=txt.slice(ranlen2-ranlen1,ranlen2);
    }else{
        testTxt=txt.slice(ranlen2,ranlen2+ranlen1);
    }
    testText.innerHTML=testTxt;
    user.onkeyup=()=>{
        let usertxt=user.value,ch="\n";
        let usertxtLen=usertxt.length;
        let userLastWord = usertxt;
        if(usertxt[usertxtLen-1]===" "){
            user.value="";
            while(ch!=" "){
                ch=testTxt[end];
                end++;
            }
            charCounter+=end;
            let currentWord=testTxt.slice(front,end);
            console.log(currentWord);
            console.log(end);
            if(userLastWord===currentWord && end!=0){
                corscore++;
                correctScore.innerHTML=corscore;
                resultColor.style.color="blue";
                
            }else{
                wrongscore++;
                resultColor.style.color="red";
                wrongScore.innerHTML=wrongscore;
            }
            let colorInterval=setInterval(() => {
                resultColor.style.color="white";
                clearInterval(colorInterval);
            }, 1000);
            testTxt=testTxt.replace(currentWord,"");
            testText.innerHTML=testTxt;
            // front=end;
            front=0;
            end=0;
        }
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    typingGame();
})

restart.addEventListener("click",()=>{
    clearInterval(countInterval);
    time_counter=60,charCounter=0;
    testTxt,correct=0,wrong=0;
    ranlen1 = Math.floor(Math.random()*20)+500;
    ranlen2 = Math.floor(Math.random()*7649)+1;
    front=0,end=0,corscore=0,wrongscore=0;
    user.disabled=false;
    correctScore.innerHTML=corscore;
    wrongScore.innerHTML=wrongscore;
    user.focus();
    typingGame();
})

scoreBoardButton.addEventListener("click",()=>{
    scoreBoard.style.display="none";
})
