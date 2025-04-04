import { useState } from 'react'
import './App.css'

function App() {
  const isciler = [
    { ad: "Elvin", soyad: "Quliyev", maas: 1200, yas: 28, staj: 5, saha: "Frontend" },
    { ad: "Kamran", soyad: "Əliyev", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
    { ad: "Nicat", soyad: "Hüseynov", maas: 1100, yas: 26, staj: 4, saha: "Mobile" },
    { ad: "Murad", soyad: "İbrahimov", maas: 1700, yas: 34, staj: 9, saha: "DevOps" },
    { ad: "Orxan", soyad: "Səfərov", maas: 900, yas: 24, staj: 2, saha: "Design" },
    { ad: "Rauf", soyad: "Rzayev", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
    { ad: "Tural", soyad: "Məmmədov", maas: 1300, yas: 29, staj: 5, saha: "Frontend" },
    { ad: "Zaur", soyad: "Ələkbərov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
    { ad: "Samir", soyad: "Babayev", maas: 1600, yas: 33, staj: 7, saha: "Backend" },
    { ad: "Fuad", soyad: "Kazımov", maas: 1000, yas: 25, staj: 3, saha: "Mobile" },
    { ad: "Vüsal", soyad: "Tağıyev", maas: 1350, yas: 30, staj: 6, saha: "Frontend" },
    { ad: "Emin", soyad: "Əhmədov", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
    { ad: "Nurlan", soyad: "Süleymanov", maas: 950, yas: 23, staj: 2, saha: "Design" },
    { ad: "Cavid", soyad: "Qasımov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
    { ad: "Rəşad", soyad: "Əzizov", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
    { ad: "Fərid", soyad: "Nağıyev", maas: 1300, yas: 29, staj: 6, saha: "QA" },
    { ad: "Sahil", soyad: "İsmayılov", maas: 1050, yas: 26, staj: 3, saha: "Frontend" },
    { ad: "Əli", soyad: "Səmədov", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
    { ad: "İlqar", soyad: "Həsənov", maas: 1100, yas: 27, staj: 4, saha: "Mobile" },
    { ad: "Tofiq", soyad: "Əliyev", maas: 1600, yas: 34, staj: 9, saha: "DevOps" },
    { ad: "Süleyman", soyad: "Zeynalov", maas: 980, yas: 24, staj: 2, saha: "Design" },
    { ad: "İbrahim", soyad: "Qəhrəmanov", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
    { ad: "Məmməd", soyad: "Ələsgerov", maas: 1300, yas: 28, staj: 5, saha: "Frontend" },
    { ad: "Ramin", soyad: "Şükürov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
    { ad: "Sadiq", soyad: "Orucov", maas: 1500, yas: 33, staj: 8, saha: "Backend" },
    { ad: "Xəyal", soyad: "Namazov", maas: 1020, yas: 25, staj: 3, saha: "Mobile" },
    { ad: "Əhməd", soyad: "Rəhimov", maas: 1350, yas: 29, staj: 6, saha: "Frontend" },
    { ad: "Teymur", soyad: "Fətəliyev", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
    { ad: "Elçin", soyad: "Qarayev", maas: 990, yas: 23, staj: 2, saha: "Design" },
    { ad: "Nazim", soyad: "İmanov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
    { ad: "Cavidan", soyad: "Əlizadə", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
    { ad: "Röyal", soyad: "Zamanov", maas: 1300, yas: 29, staj: 6, saha: "QA" },
    { ad: "Səməd", soyad: "Vəliyev", maas: 1050, yas: 26, staj: 3, saha: "Frontend" },
    { ad: "Ülvi", soyad: "Cəfərov", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
    { ad: "Şamil", soyad: "Bədəlov", maas: 1100, yas: 27, staj: 4, saha: "Mobile" },
    { ad: "Etibar", soyad: "Şahverdiyev", maas: 1600, yas: 34, staj: 9, saha: "DevOps" },
    { ad: "Adil", soyad: "Vahabov", maas: 970, yas: 24, staj: 2, saha: "Design" },
    { ad: "Elgiz", soyad: "Bayramov", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
    { ad: "Zakir", soyad: "Qurbanov", maas: 1300, yas: 28, staj: 5, saha: "Frontend" },
    { ad: "Faiq", soyad: "Məlikov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
    { ad: "Togrul", soyad: "Mustafayev", maas: 1500, yas: 33, staj: 8, saha: "Backend" },
    { ad: "Ümid", soyad: "Əkbərov", maas: 1000, yas: 25, staj: 3, saha: "Mobile" },
    { ad: "Fikrət", soyad: "Şirinov", maas: 1350, yas: 29, staj: 6, saha: "Frontend" },
    { ad: "Yusif", soyad: "Mehdiyev", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
    { ad: "Rüfət", soyad: "Nəcəfov", maas: 950, yas: 23, staj: 2, saha: "Design" },
    { ad: "Bəxtiyar", soyad: "Salmanov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
    { ad: "Vaqif", soyad: "Yusubov", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
    { ad: "Şahin", soyad: "Hacıyev", maas: 1300, yas: 29, staj: 6, saha: "QA" }
  ]

  const [filterName, setFilterName] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [sortOrder, setSortOrder] = useState(null)
  const [filterSaha, setFilterSaha] = useState('')
  const [filteredSaha, setFilteredSaha] = useState([])
  const [ageFilter, setAgeFilter] = useState(null)
  const [filteredAgeList, setFilteredAgeList] = useState([])
  const [stjFilterArr, setStjFilterArr] = useState([])
  const [randomIsci, setRandomIsci] = useState([])
  const [addIsciName,setAddIsciName] = useState('')
  const [addIsciSurname,setAddIsciSurname] = useState('')
  const [addIsciPrice,setAddIsciPrice] = useState('')
  const [addIsciAge,setAddIsciAge] = useState('')
  const [addIsciStaj,setAddIsciStaj] = useState('')
  const [addIsciSaha,setAddIsciSaha] = useState('')
  const [addArr,setAddArr] = useState([])

  function nameFilter(e) {
    const isci = isciler.filter((item) => item.ad.toLowerCase().includes(e.toLowerCase()))
    if (e.length > 0) {
      setFilteredList(isci)
    }
    console.log(isci)
  }

  let sortedList = []
  function siralamaA() {
    setSortOrder("A")
  }
  function siralamaB() {
    setSortOrder("B")
  }

  if (sortOrder === "A") {
    sortedList = [...isciler].sort((a, b) => a.maas - b.maas)
  } else if (sortOrder === "B") {
    sortedList = [...isciler].sort((a, b) => b.maas - a.maas)
  }

  function sahaFilter(a) {
    setFilterSaha(a.target.value)
    const sahaFiltered = isciler.filter((item) => item.saha === a.target.value)
    setFilteredSaha(sahaFiltered)
  }

  function ageFiltered(type) {
    setAgeFilter(type)
    let filteredAge = []
    if (type === "a") {
      filteredAge = isciler.filter((item) => item.yas > 18 && item.yas < 26)
      console.log(filteredAge)
    } else if (type === "b") {
      filteredAge = isciler.filter((item) => item.yas > 25 && item.yas < 31)
      console.log(filteredAge)
    } else if (type === "c") {
      filteredAge = isciler.filter((item) => item.yas >= 31)
      console.log(filteredAge)
    }
    setFilteredAgeList(filteredAge)
  }

  function stajFiltered() {
    const stajFilter = isciler.filter((item) => item.staj === Math.max(...isciler.map((item) => item.staj)))
    console.log(stajFilter)
    setStjFilterArr(stajFilter)
  }

  function randomIsciVer() {
    const randomIndex = Math.floor(Math.random() * isciler.length)
    const randomIs = isciler[randomIndex]
    console.log(randomIs)
    setRandomIsci(randomIs)
  }

  function ElaveEt(){
    const newIsci = {
      ad: addIsciName,
      soyad : addIsciSurname,
      maas : Number(addIsciPrice),
      yas : Number(addIsciAge),
      staj : Number(addIsciStaj),
      saha : filterSaha
    }
    
    console.log(newIsci)
    setAddArr([...addArr,newIsci])
    setAddIsciName('')
    setAddIsciSurname('')
    setAddIsciPrice('')
    setAddIsciAge('')
    setAddIsciStaj('')
    setAddIsciSaha('')
  }



  return (
    <div className='flex flex-wrap gap-6 p-4 justify-center container'>
      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-blue-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 1</h1>
        </div>
        <div className='p-4'>
          <input value={filterName}
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition-all' 
            type="text" 
            placeholder='Ad daxil edin' 
            onChange={(e) => {
              setFilterName(e.target.value)
              nameFilter(e.target.value)
            }} 
          />
          <ul className='max-h-48 overflow-y-auto pl-2'>
            {filteredList.length > 0 ? filteredList.map((item, index) => {
              return <li key={index} className='py-1 px-2 hover:bg-blue-50 rounded transition-colors'>{item.ad}</li>
            }) : (filterName.length > 0 && <p className='text-red-500 italic'>Heç bir nəticə tapılmadı</p>)}
          </ul>
        </div>
      </div>


      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-green-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 2</h1>
        </div>
        <div className='p-4'>
          <div className='flex gap-4 justify-center mb-4'>
            <button 
              onClick={siralamaA} 
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${sortOrder === 'A' ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-green-100'}`}
            >
              A-Z
            </button>
            <button 
              onClick={siralamaB} 
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${sortOrder === 'B' ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-green-100'}`}
            >
              Z-A
            </button>
          </div>
          <div className='max-h-48 overflow-y-auto'>
            <ul className='grid grid-cols-3 gap-2'>
              {
                sortedList.map((item, index) => {
                  return <li key={index} className='bg-gray-100 px-3 py-1 rounded text-center'>{item.maas}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>


      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-purple-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 3</h1>
        </div>
        <div className='p-4'>
          <select 
            onChange={sahaFilter} 
            value={filterSaha} 
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 appearance-none bg-white'
          >
            <option value="">Sahəni seçin..</option>
            {
              [...new Set(isciler.map(item => item.saha))].map((saha, index) => {
                return <option key={index} value={saha}>{saha}</option>
              })
            }
          </select>
          <ul className='max-h-48 overflow-y-auto'>
            {
              filteredSaha.map((item, index) => {
                return (
                  <li key={index} className='flex justify-between py-2 px-3 border-b border-gray-100 last:border-0'>
                    <span>{item.ad}</span>
                    <span className='bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs'>{item.saha}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>


      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-amber-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 4</h1>
        </div>
        <div className='p-4'>
          <div className='flex gap-2 justify-center mb-4'>
            <button 
              onClick={() => { ageFiltered('a') }} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${ageFilter === 'a' ? 'bg-amber-600 text-white' : 'bg-gray-200 hover:bg-amber-100'}`}
            >
              18-25
            </button>
            <button 
              onClick={() => { ageFiltered('b') }} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${ageFilter === 'b' ? 'bg-amber-600 text-white' : 'bg-gray-200 hover:bg-amber-100'}`}
            >
              26-30
            </button>
            <button 
              onClick={() => { ageFiltered('c') }} 
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${ageFilter === 'c' ? 'bg-amber-600 text-white' : 'bg-gray-200 hover:bg-amber-100'}`}
            >
              31+
            </button>
          </div>
          <div className='max-h-48 overflow-y-auto'>
            <ul className='grid grid-cols-2 gap-2'>
              {
                filteredAgeList.map((item, index) => {
                  return <li key={index} className='bg-amber-50 px-3 py-2 rounded text-center hover:bg-amber-100 transition-colors'>{item.ad}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>


      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-red-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 5</h1>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <button 
            onClick={stajFiltered} 
            className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors w-full mb-4'
          >
            Ən təcrübəli işçini göstər
          </button>
          <div className='w-full'>
            {
              stjFilterArr.map((item, index) => {
                return (
                  <div key={index} className='bg-gray-50 p-4 rounded-lg mb-2 text-center'>
                    <div className='text-lg font-semibold'>{item.ad}</div>
                    <div className='text-sm text-gray-600'>Təcrübə: <span className='font-bold text-red-600'>{item.staj} il</span></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


      <div className='bg-white shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
        <div className='bg-indigo-600 text-white py-3 px-4'>
          <h1 className='font-bold text-xl text-center'>Task 6</h1>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <button 
            onClick={randomIsciVer} 
            className='bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg mb-4 font-medium transition-colors'
          >
            Təsadüfi işçi göstər
          </button>
          {randomIsci.ad && (
            <div className='bg-indigo-50 p-4 rounded-lg w-full text-center'>
              <div className='text-lg font-semibold'>{randomIsci.ad} {randomIsci.soyad}</div>
              <div className='text-sm text-gray-600'>
                {randomIsci.saha} | {randomIsci.yas} yaş | {randomIsci.staj} il təcrübə
              </div>
              <div className='mt-1 text-indigo-600 font-bold'>{randomIsci.maas}₼</div>
            </div>
          )}
        </div>
      </div>

      
      <div className='bg-white w-[600px] shadow-lg rounded-lg w-72 h-auto border border-gray-200 overflow-hidden transition-transform hover:scale-105'>
  <div className='bg-teal-600 text-white py-3 px-4'>
    <h1 className='font-bold text-xl text-center'>Task 7</h1>
  </div>
  <div className='p-4 flex gap-x-7'>
    <div className='space-y-3 mb-4'>
      <input value={addIsciName} onChange={(e)=>{
        setAddIsciName(e.target.value)
      }}
        type="text" 
        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
        placeholder="Ad"
      />
      <input value={addIsciSurname} onChange={(e)=>{
        setAddIsciSurname(e.target.value)
      }}
        type="text" 
        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
        placeholder="Soyad"
      />
      <input value={addIsciPrice} onChange={(e)=>{
        setAddIsciPrice(e.target.value)
      }}
        type="text" 
        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
        placeholder="Maaş"
      />
      <input value={addIsciAge} onChange={(e)=>{
        setAddIsciAge(e.target.value)
      }}
        type="text" 
        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
        placeholder="Yaş"
      />
      <input value={addIsciStaj} onChange={(e)=>{
        setAddIsciStaj(e.target.value)
      }}
        type="text" 
        className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
        placeholder="Staj"
      />
      <select 
            onChange={sahaFilter} 
            value={filterSaha} 
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 appearance-none bg-white'
          >
            <option value="">Sahəni seçin..</option>
            {
              [...new Set(isciler.map(item => item.saha))].map((saha, index) => {
                return <option key={index} value={saha}>{saha}</option>
              })
            }
          </select>
    <button onClick={ElaveEt} className='w-full bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-medium transition-colors mb-4'>
      Əlavə et
    </button>
    </div>
    
    
    <div className='bg-gray-50 p-6 w-[1000px] rounded-lg min-h-16 border border-gray-200 shadow-md'>
  <ul className='space-y-4'>
    {addArr.map((item, i) => (
      <li key={i} className='bg-white p-4 rounded-lg shadow-sm'>
        <ul className='space-y-2'>
          <li className='font-semibold'>Ad: <span className='text-gray-700'>{item.ad}</span></li>
          <li className='font-semibold'>Soyad: <span className='text-gray-700'>{item.soyad}</span></li>
          <li className='font-semibold'>Maas: <span className='text-gray-700'>{item.maas}</span></li>
          <li className='font-semibold'>Yas: <span className='text-gray-700'>{item.yas}</span></li>
          <li className='font-semibold'>Staj: <span className='text-gray-700'>{item.staj}</span></li>
          <li className='font-semibold'>Sahe: <span className='text-gray-700'>{item.saha}</span></li>
        </ul>
      </li>
    ))}
  </ul>
</div>

  </div>
</div>
    </div>
  )
}

export default App