import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} 
              description="Alexa is a virtual assistant created by Amazon. It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system."
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana is a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speakers, Microsoft Band, Xbox One, iOS, Android, and Windows Mixed Reality. Cortana is capable of voice interaction, making to-do lists, setting reminders, playing music, answering questions, and providing local search results. Cortana can also control several smart devices using itself as a home automation system."
              />
            </div>

            <div className="column is-4">
              <ProfileCard title="Siri" handle="siri01" image={SiriImage}
              description="Siri is a virtual assistant developed by Apple Inc. that is available on Apple devices. Siri can understand voice commands and complete tasks such as making phone calls, sending text messages, setting reminders, and playing music. Siri can also control several smart devices using itself as a home automation system."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
