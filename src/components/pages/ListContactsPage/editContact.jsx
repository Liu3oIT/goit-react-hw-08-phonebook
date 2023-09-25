// import React, { useState } from 'react';
// import { Button, Card, Heading, Input, Modal } from './editForm.styled';

// const EditForm = ({ isOpen, onClose, onSave, contactEdit }) => {
//   const [contactData, setContactData] = useState({
   
//     name: contactEdit.name,
//     phone: contactEdit.number,
//   });

//   const handleSaveContact = () => {
//     console.log('Saving contact data:', contactData);
//     console.log(contactEdit.id);
//     onSave(contactData, contactEdit.id);
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen}>
//       <Card>
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <Heading>Edit Contact</Heading>
//         <div className="form-field">
//           <label htmlFor="name">Name:</label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={contactData.name}
//             onChange={e =>
//               setContactData({
//                 ...contactData,
//                 name: e.target.value,
//               })
//             }
//           />
//         </div>
//         <div className="form-field">
//           <label htmlFor="phone">Phone:</label>
//           <Input
//             type="text"
//             id="phone"
//             name="phone"
//             value={contactData.phone}
//             onChange={e =>
//               setContactData({
//                 ...contactData,
//                 phone: e.target.value,
//               })
//             }
//           />
//         </div>
//         <Button onClick={handleSaveContact}>Save</Button>
//       </Card>
//     </Modal>
//   );
// };

// export default EditForm;
