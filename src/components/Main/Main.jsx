import { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  const [isTyping, setIsTyping] = useState(false); // State to track if user is typing

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value); // Update input state
    setIsTyping(e.target.value.length > 0); // Update isTyping state based on input length
  };

  return (
    <div className='main'>
      <div className='nav'>
        <p>
          Neura <span className='beta'>Beta</span>
        </p>
        <img src={assets.user_icon} alt='' />
      </div>
      <div className='main-container'>
        {!showResult ? (
          <>
            <div className='greet'>
              <p>
                <span>Namaste</span>
              </p>
              <p>What are we doing today?</p>
            </div>
            <div className='cards'>
              <div className='card'>
                <h3 className='headingsubcontent'>CREATE</h3>
                <div className='subcontent'>Mini Volcano Project</div>
                <div className='subcontent'>Bangalore Travel Guide</div>
                <div className='subcontent'>Home Workout Routine</div>
                <img src={assets.compass_icon} alt='' />
              </div>
              <div className='card'>
                <h3 className='headingsubcontent'>LEARN</h3>
                <div className='subcontent'>Explain Blockchain</div>
                <div className='subcontent'>Start Small Business</div>
                <div className='subcontent'>Styling Kurti</div>
                <img src={assets.bulb_icon} alt='' />
              </div>
              <div className='card'>
                <h3 className='headingsubcontent'>DISCOVER</h3>
                <div className='subcontent'>Historical Places</div>
                <div className='subcontent'>Indian Desserts</div>
                <div className='subcontent'>Sports Career</div>
                <img src={assets.message_icon} alt='' />
              </div>
            </div>

            <div className='mobilecard'>
                <h3 className='headingsubcontent'>CREATE, LEARN, DISCOVER</h3>
                <div className='mobcontent'>Bangalore Travel Guide Rule</div>
                <div className='mobcontent'>Smartphone Accessories Online </div>
                <div className='mobcontent'>History of Tat Group</div>
              </div>

          </>
        ) : (
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt='' />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt='' />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className='main-bottom'>
          <div className='search-box'>
            <input
              onChange={handleInputChange} // Handle input change
              value={input}
              type='text'
              placeholder='Ask me anything '
            />
            <div>
              {/* Conditional rendering based on input state */}
              {!isTyping && <img src={assets.mic_icon} alt='' />}
              {input && <img onClick={() => onSent()} src={assets.send_icon} alt='' />}
            </div>
          </div>
          <p className='bottom-info'>Neura may display inaccurate info, including about people, so double-click its responses.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
