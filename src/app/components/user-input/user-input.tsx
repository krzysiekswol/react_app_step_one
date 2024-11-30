import styles from './user-input.module.css';

export default function UserInput() {
  return (
    <form className="flex flex-wrap mt-8 justify-center">
      <label className={styles.text}>
        ICAO Code:
        <input type="text" className="mx-2 px-2 py-1 border border-gray-800" name="icao" />
      </label>
      <div className="w-full mt-6 flex justify-end">
        <button className={styles.submit} type="submit">Submit</button>
      </div>
    </form>
  )
}