export default function Mute({ sound, setSound }) {
  return (
    <>
      {!sound && (
        <i
          onClick={() => setSound(!sound)}
          className={"volume fas fa-volume-mute"}
        />
      )}
      {sound && (
        <i
          onClick={() => setSound(!sound)}
          className={"volume fas fa-volume-up"}
        />
      )}
    </>
  );
}
