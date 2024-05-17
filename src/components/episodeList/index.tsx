import styles from "./styles.module.scss";
import { EpisodeType } from "../../services/courseService";

interface props {
  episode: EpisodeType;
}

const EpisodeList = function ({ episode }: props) {
  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}: ${toString(seconds)}}`;

    return result;
  };

  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}> Episódio Nº {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis} O Onebitcode Black é o lugar para você evoluir.
            Para isso, você vai ter acesso às práticas avançadas de programação,
            atualizações de tecnologias e todo o suporte técnico necessário para
            ser um sênior na programação.
            <br />O Onebitcode Black é o lugar para você evoluir. Para isso,
            você vai ter acesso às práticas avançadas de programação,
            atualizações de tecnologias e todo o suporte técnico necessário para
            ser um sênior na programação.
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
