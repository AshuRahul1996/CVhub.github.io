
console.log("welcome to index.js");
const data = [
    {
        name7: 'ramu',
        age: 18,
        city: 'mumbai',
        Qualification:'B-tech',
        language: 'python',
        image: "HIMANSHU2.JPG",
        framework: 'angular',
        ExtraSkill:'Data entry'
    },

    {
        name7: 'karan',
        age: 24,
        city: 'jammu',
        Qualification:'Bca',
        language: 'python',
        image: 'SONU2.JPG',
        framework: 'react',
        ExtraSkill:'Ms-office',
    },
    {
        name7: 'sonu',
        age: 22,
        city: 'goa',
        Qualification:'B-tech',
        language: 'python',
        image: 'SURAJ2.JPG',
        framework: 'react',
        ExtraSkill:'blogging'
    },
    {
        name7: 'ramesh',
        age: 20,
        city: 'patna',
        Qualification:'Mca',
        language: 'c++',
        image: 'RAHUL2.JPG',
        framework: 'react',
        ExtraSkill:'Affiliate Marketing'
    }
]
function cvItererator(profiles){
        let nextIndex=0;
        return{
            next:function(){
                return nextIndex<profiles.length ?
                {value: profiles[nextIndex++],done:false}:
                {done:true}
            }
        };

} 
const candidates= cvItererator(data);
nextCV()
const next = document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const currentCandidate =candidates.next().value;
    let image =document.getElementById('image');
    let profile =document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<image src='${currentCandidate.image}'>`;

    profile.innerHTML =`<ul class="list-group">
    <li class="list-group-item">Name:${currentCandidate.name7}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Qualification: ${currentCandidate.Qualification}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.framework} framework</li>
    <li class="list-group-item">ExtraSkill: ${currentCandidate.ExtraSkill}</li>
    
  </ul>`;

  }
  else{
      alert('End of candidate application');
      window.location.reload()
  }
}