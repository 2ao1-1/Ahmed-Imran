import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function useContact() {
  const spanRefs = useRef({
    name: null,
    service: null,
    timeframe: null,
    budget: null,
    email: null,
  });

  const inputRefs = {
    name: useRef(null),
    service: useRef(null),
    timeframe: useRef(null),
    budget: useRef(null),
    email: useRef(null),
  };

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    timeframe: '',
    budget: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      service: '',
      timeframe: '',
      budget: '',
      email: '',
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      const spanRef = spanRefs.current[key];
      const inputRef = inputRefs[key];
      if (spanRef && inputRef.current) {
        const spanWidth = spanRef.offsetWidth;
        inputRef.current.style.width = `${spanWidth + 5}px`;
      }
    });
    // eslint-disable-next-line
  }, [formData]);

  const validateForm = () => {
    const { name, service, timeframe, budget, email } = formData;
    if (!name || !service || !timeframe || !budget || !email) {
      alert('Please fill in all fields');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    if (!validateForm()) return;
    try {
      await emailjs.send(
        'service_heqyo3b',
        'template_9atdkq9',
        formData,
        'zMRlnpmXzMo_B30Ar',
      );
      alert('The message was sent successfully via email!');
    } catch (error) {
      alert('Failed to send email. Try again.');
      console.error(error);
    }

    resetForm();
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const whatsappMessage = `Hey Ahmed, my name is ${formData.name}. I would like to start a new project with you. I'm looking for ${formData.service}. The timing for this project is ${formData.timeframe}. The budget is ${formData.budget}. You can reach me via email at ${formData.email}.`;

    window.open(
      `https://wa.me/201030960225?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
    );
    resetForm();
  };

  const renderDynamicInput = (name, placeholder) => {
    return (
      <span className="relative inline-block">
        <span
          ref={(el) => (spanRefs.current[name] = el)}
          className="invisible absolute whitespace-nowrap px-1"
        >
          {formData[name] || placeholder}
        </span>
        <input
          ref={inputRefs[name]}
          type="text"
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="bg-tertiory px-1 text-center text-base focus:outline-none focus:ring-0 md:text-xl"
          style={{ minWidth: '5px' }}
        />
      </span>
    );
  };

  return { renderDynamicInput, sendEmail, sendWhatsApp };
}
