import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  // TODO: I have no idea what this does...
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  // TODO: I don't understand what this does either.
  // Probably gonna need to finish that JS run through after this is all setup.
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thanks for stopping by!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}

