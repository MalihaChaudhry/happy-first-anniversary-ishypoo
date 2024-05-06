import Reactotron from 'reactotron-react-js';
import reactotronZustand from 'reactotron-plugin-zustand';
import useScavStore from './src/stores/useScavStore';

Reactotron.configure({})
  .use(
    reactotronZustand({
      stores: [{ name: 'scav', zustand: useScavStore }],
    })
  )
  .connect();
