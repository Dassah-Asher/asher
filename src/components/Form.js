


 function Form(){
  return (
    <section className="form">
        <div><p className="pp">For more information please send me an <br/>
         e-mail........</p></div>
      <form>
        <input
          type="email"
          placeholder="enter email"
          
        />
        <textarea name="textarea" placeholder="enter meassage please"></textarea>
         
        <input type="text" placeholder="enter phone number" />
        <button>SUBMIT</button>
      </form>
      
    </section>
  );

 }

  

export default Form;
