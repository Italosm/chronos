import { showMessage } from '../adapters/showMessage';
import gravitacionalBeep from '../assets/audios/gravitational_beep.mp3';
export function loadBeep() {
  const audio = new Audio(gravitacionalBeep);
  audio.load();
  return () => {
    audio.currentTime = 0;
    audio.play().catch(err => {
      alert('Erro ao tocar o áudio');
      showMessage.dismiss();
      showMessage.info('Erro ao tocar o áudio');
      console.log(err);
    });
  };
}
