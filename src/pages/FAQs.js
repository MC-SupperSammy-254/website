import React from 'react';
import "../styles/FAQs.css"
import FAQItem from '../components/FAQItem';

function FAQs() {

  return (
    <div className='faq'>
    <h2>Frequently Asked Questions (FAQs)</h2>

    <div>
    <FAQItem question="General FAQ's:" isMain>
    <ol>
      <li className='list-2'>
      <FAQItem question="What is a Master of Ceremony (MC)?">
        <li className='list-3'>An MC is a host or presenter who guides and engages the audience during events, ensuring the smooth flow of the program.</li>
      </FAQItem>
      </li>

      <li className='list-2'>
      <FAQItem question="What types of events do you specialize in?">
        <li className='list-3'>I specialize in weddings, corporate events, conferences, parties, and more.</li>
      </FAQItem>
      </li>

      <li className='list-2'>
      <FAQItem question="How do I book your services?">
        <li className='list-3'>To book me as your MC, please reach out through the contact form on my website or give me a call.</li>
      </FAQItem>
      </li>

      <li className='list-2'>
      <FAQItem question=" Do you provide event planning services as well?">
      <li className='list-3'>While I focus on being an MC, I can offer event coordination suggestions and collaborate with event planners.</li>
      </FAQItem>
      </li>

      <li className='list-2'>
      <FAQItem question="What sets you apart as an MC?">
      <li className='list-3'>I bring energy, professionalism, and a personalized touch to every event. My experience ensures a memorable occasion.</li>
      </FAQItem>
      </li>
    </ol>
    </FAQItem>
    </div>

    <FAQItem question="Pre-Event Preparation:" isMain>
    <ol>

    <li className='list-2'>
     <FAQItem question="Do you customize your script for each event?">
     <li className='list-3'>Absolutely! I tailor my script to match the tone, theme, and goals of your event.</li>
     </FAQItem>
     </li>

     <li className='list-2'>
     <FAQItem question="Can we meet before the event to discuss details?">
     <li className='list-3'>Of course, I'm happy to meet in person or virtually to ensure I understand your vision and requirements.</li>
     </FAQItem>
     </li>

     <li className='list-2'>
     <FAQItem question="How much time do you need for event preparation?">
     <li className='list-3'>I typically require a week or two to prepare, but it depends on the complexity of the event.</li>
     </FAQItem>
     </li>
    </ol> 
    </FAQItem>


    <FAQItem question="During the Event:" isMain>
    <ol>

    <li className='list-2'>
     <FAQItem question=" Do you handle impromptu situations?">
      <li className='list-3'>Yes, I'm skilled in thinking on my feet and can smoothly handle unexpected moments that arise.</li>
     </FAQItem>
     </li>

     <li className='list-2'>
     <FAQItem question="How do you engage the audience?">
      <li className='list-3'>I use a mix of storytelling, humor, and interaction to keep the audience engaged and entertained.</li>
     </FAQItem>
     </li>

     <li className='list-2'>
     <FAQItem question="What do you do if there's a technical issue during the event?">
      <li className='list-3'>I remain adaptable and ensure the show goes on smoothly. I can engage the audience while technical issues are resolved</li>
     </FAQItem>
     </li>
    </ol> 
    </FAQItem>

  
    <FAQItem question="Rates and Availability:" isMain>
    <ol>

    <li className='list-2'>
    <FAQItem question=" What are your rates for MC services?">
     <li className='list-3'>Rates vary based on the type of event, duration, and other factors. Please contact me for a personalized quote.</li>
    </FAQItem>
    </li>

    <li className='list-2'>
    <FAQItem question="Are your services available for out-of-town events?">
      <li className='list-3'>Yes, I'm available for events both locally and out of town. Travel arrangements can be discussed.</li>
    </FAQItem>
    </li>

    <li className='list-2'>
    <FAQItem question=" How far in advance should I book your services?">
      <li className='list-3'>It's recommended to book me as early as possible to ensure availability, especially for peak event seasons.</li>
    </FAQItem>
    </li>
    </ol>
    </FAQItem>

  
    <FAQItem question="Post-Event:" isMain>
    <ol>
    <li className='list-2'>
    <FAQItem question="Can we provide feedback after the event?">
      <li className='list-3'>Absolutely! Your feedback is invaluable and helps me continuously improve my services.</li>
    </FAQItem>
    </li>

    <li className='list-2'>
    <FAQItem question="Can we stay in touch for future events?">
      <li className='list-3'>Certainly, I'd love to work with you again. Feel free to reach out for any future event needs.</li>
    </FAQItem>
    </li>
    </ol>
    </FAQItem>

  </div>
  )
}


export default FAQs;
