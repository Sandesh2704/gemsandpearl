import './App.css';
import AddSection from './Section/AddSection';
import AddSection2 from './Section/AddSection2';
import Certification from './Section/Certification';
import ClientsComments from './Section/ClientsComments';
import OnInsta from './Section/OnInsta';
import ShopNow from './Section/ShopNow';
import StoneSection from './Section/StoneSection';
import StoneSection2 from './Section/StoneSection2';
import TagSection from './Section/TagSection';
import WhoWeAre from './Section/WhoWeAre';
import WhyChooseUs from './Section/WhyChooseUs';
  
function App() {
  return (
    <div className=''>
      <AddSection />
      <section className='mb-12'>
        <StoneSection />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <ShopNow />
      </section>
      <section className='my-12'>
        <StoneSection2 />
      </section>
      <section className='py-4 my-12'>
        <AddSection2 />
      </section>
      <section className=''>
        <WhyChooseUs/>
      </section>
      <section className='my-12'>
        <Certification/>
      </section>
      <section className='py-5 my-12'>
        <ClientsComments/>
      </section>
      <section className='my-12'>
        <OnInsta/>
      </section>
      <section>
        <TagSection/>
      </section>
    </div>
  );
}

export default App;
