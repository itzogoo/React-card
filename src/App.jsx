import MyCard from "./component/MyCard"
const App = () => {
  const employees = [
    {
      fname: "John Doe",
      position: "CEO",
      image:"https://th.bing.com/th?id=OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      phone: "08062931234",
      email: "johndoe@yahoo.com",
    },
    {
      fname: "Ramsey Han",
      position: "Chairman",
      image: "https://th.bing.com/th/id/OIP.hxuVQD24AtyvcWhTdvxLvwHaHa?pid=ImgDet&w=181&h=181&c=7&dpr=1.3",
      phone: "08062931234",
      email: "kingramsey@yahoo.com",
    },
    {
      fname: "Prince Goerge",
      position: "CMO",
      image:  "https://c.pxhere.com/photos/a6/37/portrait_mamiya_film_kodak_medium_format_portra_k_z_pform_tum-192094.jpg!d",
      phone: "08062931234",
      email: "prince@yahoo.com",
    },
    {
      fname: "Kehinde Olusoga",
      position: "CFO",
      image:  "https://www.fashionhombre.com/wp-content/uploads/2020/11/Fresh-Short-Hairstyles-For-Black-Men-28.jpg",
      phone: "08062931234",
      email: "kenhindeolu@yahoo.com",
    },
    {
      fname: "Amanda Kate",
      position: "CTO",
      image:  "https://costar.brightspotcdn.com/dims4/default/b973f54/2147483647/strip/true/crop/985x655+0+0/resize/985x655!/quality/100/?url=http:%2F%2Fcostar-brightspot.s3.amazonaws.com%2F47%2F7f%2Fcf30db4f4116bd9835d6436df95c%2Famy-aznar.JPG",
      phone: "08104669822",
      email: "amandakatie@yahoo.com",
    },
  ];

  return (
    <div>
      {employees.map(({fname, position, image, phone, email}, index) => (
        <MyCard
        key={index}
        name={fname}
        position={position}
        image={image}
        phone={phone}
        email={email}
        />
      ))}
    </div>
  )
}

export default App
