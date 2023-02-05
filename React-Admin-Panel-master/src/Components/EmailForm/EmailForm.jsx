import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import '../EmailForm/emailform.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const EmailForm = () => {
  const { quill } = useQuill();
  const [value, setValue] = useState('');
  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on('text-change', (delta, oldDelta, source) => {
  //       console.log('Text change!');
  //       console.log(quill.getText()); // Get text only
  //       console.log(quill.getContents()); // Get delta contents
  //       console.log(quill.root.innerHTML); // Get innerHTML using quill
  //       console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
  //     });
  //   }
  // }, [quill]);
  const theme = 'snow';

  const modules = {
    toolbar: [
    ['link','bold', 'italic','clean'],
  ],
  };

  const placeholder = 'Your Email';

  const formats =['link','bold', 'italic','clean'];

  const { quillRef } = useQuill({ theme, modules, formats, placeholder });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="FormMain">
      <div className="Send">
        <SendIcon sx={{ color: '#fff', marginTop: '16px' }} />
        <div className="SendMail">
          <span>Send to John123@gmail.com</span>
        </div>
      </div>
      <input
        type="text"
        name="user_name"
        placeholder="From: "
        className="Info"
      />
      <input
        type="text"
        name="Subject"
        placeholder="Subject"
        className="Info"
      />
      {/* <textarea
        name="message"
        placeholder="Your Email"
        className="Message-Portion"
      /> */}
      {/* <ReactQuill
        modules={this.modules}
        formats={this.formats}
        placeholder="Your Email"
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: '300px' }}
      /> */}
      <div style={{ height: '300px'}} className="quill">
        <div ref={quillRef}/>
      </div>
      <input type="submit" value="Send Email" className="EmailBtn" />
    </form>
  );
};

export default EmailForm;
