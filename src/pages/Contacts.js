function Contacts() {
  return (
   <div>
    <div className="col-lg-8 mx-auto p-3 py-md-5">
     <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <a
       href="/"
       className="d-flex align-items-center text-dark text-decoration-none"
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
           <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
         </svg>
       <span className="fs-4">Starter template</span>
      </a>
     </header>
                          
     <main>
      <h1>Let to call our company</h1>
      <p className="fs-5 col-md-8">
      Open your contact card in the Contacts app (or launch the Phone app and tap the Contacts app near the right side of the screen), then tap the three-dot menu button in the top-right corner of the screen.
      </p>
         
      <div className="mb-5">
       <a href="https:/wa.me/966505505400" className="btn btn-primary btn-lg px-4">
        Go to chat
       </a>
      </div>
                
      <hr className="col-3 col-md-2 mb-5" />
                         
      <div className="row g-5">
       <div className="col-md-6">
        <h2>Company - hot line</h2>
        <p>
        Connect with customers through customized interactions and active responses. Show customers that you appreciate them, and elicit feedback through customer surveys.
        </p>
        <ul className="icon-list ps-0">
         <li className="d-flex align-items-start mb-1">
          <a
           href="https://www2.deloitte.com/kz/en/pages/finance/articles/setting-up-corporate-ethics-and-compliance-hotline.html"
          >
           Hot line our company 
          </a>
         </li>
         <li className="text-muted d-flex align-items-start mb-1">
          Accessories Parcel starter (coming soon!)
         </li>
        </ul>
       </div>
       
       <div className="col-md-6">
        <h2>Write to us</h2>
        <p>
        Start a conversation with users in your App Home. With the chat:write scope enabled, call chat.
        </p>
        <ul className="icon-list ps-0">
         <li className="d-flex align-items-start mb-1">
          <a href="https:/wa.me/966505505400">
           twitter quick start chat
          </a>
         </li>
         <li className="d-flex align-items-start mb-1">
          <a href="https:/wa.me/966505505400">
           telegram Webpack chat
          </a>
         </li>
         <li className="d-flex align-items-start mb-1">
          <a href="https:/wa.me/966505505400">wk Parcel chat</a>
         </li>
         <li className="d-flex align-items-start mb-1">
          <a href="https:/wa.me/966505505400">
           Contributing to us
          </a>
         </li>
        </ul>
       </div>
      </div>
     </main>
     <footer className="pt-5 my-5 text-muted border-top">
      Created by the Bootstrap team · © 2022
     </footer>
    </div>
   </div>
  );
 }
 
 export default Contacts;
 