var title = document.querySelector('.header');
var text = document.querySelector('.textplace');
var button = document.querySelector('.btn-child');

var places = [{
    title:'Arivu Thirukoil',
    text:'Temple of Consciousness (in Tamil Arivu Thirukoil) is situated in Aliyar on the way between Pollachi and Valparai. This ahsramam was founded by Vethathiri Maharishi. They are teaching Yoga and meditation. Entrance fee collected. Area is surrounded by mountains and dam. Very calm and quiet.'
},{
    title:'Anamalai Wildlife Sanctuary',
    text:'Anaimalai Tiger Reserve, earlier known as Indira Gandhi Wildlife Sanctuary and National Park and as Anaimalai Wildlife Sanctuary, is a protected area in the Anaimalai Hills of Pollachi and Valparai taluks of Coimbatore District and Udumalaipettai taluk in Tiruppur District, Tamil Nadu, India.'
},
{
    title:'Arulmigu Masani Amman Temple',
    text:'Arulmigu Sri Masani Amman Temple is a highly revered shrine located in Anaimalai, Pollachi area, Coimbatore district of Tamil Nadu state, India. It is situated at the confluence of Aliyar River and the Uppar stream, nestled amid grasslands against the backdrop of mighty Anaimalai Hills. The temple enshrines the sleeping goddess Masani Amman as the presiding deity.013 The deity is seen in a unique lying posture, measuring 15 feet from head to foot, holding a damaru with a snake entwined around it, a fire bowl, a bowl containing kumkuma, and a trident.'
},{
    title:'Monkey Falls',
    text:'Monkey Falls is a road on Side falls which is 28km away from Pollachi. You can reach here from Pollachi in 1 hour approx. An entrance fee of 30₹ is required to visit the falls. All types of gender and age people are allowed to bathe here. So plan accordingly. Beware of Monkeys while parking the Bike. Please watch the short video explaining the Monkey Falls.'
},
{
    title:'Aliyar Dam',
    text:'Park, Dam, Canel, River and Fishes out there is the main key points to note before visiting Aliyar. Park is generally 9 AM to 6 PM will be open except for the holidays or pandemic times. As usual, there is a small fee to enter the park around ₹30 – ₹50. On peak times such as Saturday and Sunday, it’ll be the crowd. Family and Couples occupies Aliyar Park, whereas friends will choose to swim at Aliyar Athupalam. The dam is 235ft in height. Total capacity is 3864.00 m.cft.'
},
{
    title:'Chinnar Wildlife Sanctuary',
    text:'A beautiful place with lots of animals and beautiful wildlife, Chinnar Wildlife Sanctuary is a must-visit place nearby Pollachi, and Pollachi is 65 kilometers away from the Chinnar Wildlife Sanctuary. The forests are home to approximately 34 different types of mammals, such as panthers, spotted deer, gaur, tigers, elephants, bonnet macaques, Nilgiri tahrs, hanuman monkeys, and gigantic wrinkled squirrels. The unique Grizzled Giant Squirrel, Thoovanam Waterfalls, and the expansive Watch Tower, which offers a perspective of the rest of the park, are the sanctuary primary draws.'

},{
    title:'Thirumoorthy Hills',
    text:'The Thirumoothy temple is situated in the Thirumoorthy Hills, next to the Thirumoothy dam. In these hills, there is a stream that runs by the Sri Amaralingeswarar temple and the Thirumoorthy falls. Legend has it that the Hindu deity had descended to test the loyalty of Athari Maharishi and his spouse Anushiya Devi while they were living in these hills. The Divine beings instructed them to make their sacrifices while Anushiya Devi was naked. She concurred, fed the infants, and altered the gods in their hearts with her devotion. The Hills acquired their name after the Gods greeted the pair and left'
},{
    title:'Sulakkal Mariamman Temple',
    text:'It is believed that she (Devi) faces the north; the goddess is also known as Vadukku Vayil Selvi (Vadukku meaning North in Tamil). The ruling divine idol is seated in the sanctum sanctorum, holding an udukkai and a sword in the right hand and a trident and a skull in the left. Although there is a distinct Utsava Murthy, the primary idol is really the only one to which abhishekams are performed. Near the Swayambumurthy, there is a Sulam (trident), which is how this location got the name Sulakkal. Many followers go great distances to this temple to seek Mother Sulakkais blessings because she is known for her ability to heal her followers vision issues'

},{
    title:'Subramanya Swamy Temple',
    text:'Pollachi’s Subramanya Swamy Temple, which goes back to the Konga Chola period and is almost 700 years old, is another must-see attraction. Thiruvahatheswaramudayar temple was the name given to the temple by the Konga Cholas at the time. The temple is a must-see for anybody interested in ancient architecture. The temple is dedicated to Lord Shiva, who is revered as its primary deity. This temple may be found in the city’s central area and is situated about five kilometres from the Pollachi bus terminal.'
},{
    title:'Topslip Tiger Reserve',
    text:'Topslip is around 38 kilometres from Pollachi on the Parambikulam Highway and takes an hour and 38 minutes to get there. The ‘Elephant Safari’, a one-hour excursion, is the centrepiece of this tiger forest. When contrasted to other sanctuaries in the area, this one has a more limited range of wildlife and plants. The elephant safari takes place between the hours of 11:00 a.m. and 2:00 p.m. daily. The Forest, on the other hand, is open from 7:00 a.m. until 4:00 p.m.'
}] 

button.addEventListener("click", function() {
    let randomNumber=Math.floor(Math.random()*places.length);
    title.innerText = places[randomNumber].title;
    text.innerText = places[randomNumber].text;
})