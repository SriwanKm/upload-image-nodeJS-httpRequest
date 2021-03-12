const images =  [
   {
      id: 1,
      name: "Coconut",
      url: "https://femina.wwmindia.com/content/2018/sep/inner11535961375.jpg"
   },
   {
      id: 2,
      name: "Jackfruit",
      url: "https://blueskytravelvietnam.com/public/uploads/images/LAOS/Jackfruit-of-Vietnam.jpg"
   },
   {
      id: 3,
      name: "Mangosteen",
      url: "https://www.verywellfit.com/thmb/tSyuO1Pjg0O48TL7qhTc6ObLAYM=/2121x1414/filters:fill(FFDB5D,1)/GettyImages-824746434-5ac79403ba61770037db6fc9.jpg"
   },
   {
      id: 4,
      name: "Rambutan",
      url: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2239,w_3366,x_193,y_670/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/Rambutan_togufg.jpg"
   },
   {
      id: 5,
      name: "Pomelo",
      url: "https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2020/4/25/8/37/3/DEVANAHALLI_POMELO.jpg"
   },
]

const mappedImages = images.map(img => `<div><img src="${img.url}" alt="${img.name}"/>${img.name}</div>`).join("")

document.getElementById('container').innerHTML = mappedImages