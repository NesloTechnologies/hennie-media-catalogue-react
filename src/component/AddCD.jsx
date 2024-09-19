import React from "react";
import closeIcon from "../asset/icon/close.svg";
import "../stylesheet/form.scss";
import "../stylesheet/styles.scss";

const AddCD = () => (
  <body>
    <header>
      <h1>Add&nbsp;CD</h1>
      <button>
        <img src={closeIcon} alt="close button" />
      </button>
    </header>
    <main>
      <form>
        <fieldset>
          <fieldset>
            <label for="title">Title</label>
            <input name="title" id="title" type="text" />
          </fieldset>
          <fieldset>
            <label for="artist">Artist</label>
            <input name="artist" id="artist" type="text" />
          </fieldset>
        </fieldset>

        <fieldset>
          <fieldset>
            <label for="duration">Duration</label>
            <input name="duration" id="duration" type="number" />
          </fieldset>
          <fieldset>
            <label for="release-date">Release&nbsp;Date</label>
            <input name="release-date" id="release-date" type="date" />
          </fieldset>
        </fieldset>
        <fieldset>
          <button>Add</button>

          <button>Cancel</button>
        </fieldset>
      </form>
    </main>
  </body>
);

export default AddCD;
