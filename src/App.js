import Carousel, { CarouselItem } from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import "./App.css";

// array of dummy data in order to map and make it dynamic
const dummyData = [

{
	"img":"1.png",
	"title":"What is Latana?",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"2.png",
	"title":"Getting Started",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"3.png",
	"title":"Using Latana",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"4.png",
	"title":"Data Collection & Methodology",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"1.png",
	"title":"What is Latana?",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"2.png",
	"title":"What is Latana?",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"4.png",
	"title":"What is Latana?",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
},
{
	"img":"3.png",
	"title":"What is Latana?",
	"label1":"How does Latana work?",
	"label2":"Why choose Latana?",
	"label3":"What does Latana cost?"
}

]

export default function App() {
  return (
<div className="App">
   <section>
      <div className="section-title">Latana Knowledge Center</div>
      <div className="section-description">Everything you need to know about the best brand tracking solution in the world.</div>
      <div className="slider">
         <Carousel>
            {dummyData.map((data, index) => (
            <CarouselItem key={index} >
               <Card data={data} />
            </CarouselItem>
            ))}
         </Carousel>
      </div>
   </section>
</div>
  );
}
