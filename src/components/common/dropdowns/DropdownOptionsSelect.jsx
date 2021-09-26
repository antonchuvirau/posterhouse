// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';

// const DropdownOptionsSelect = ({ // ToDo remove
//     selectOptions,
//     selectActionType,
// }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dispatch = useDispatch();

//     const {
//         id = '',
//         title = null,
//         selected = {},
//         options = [],
//         description = null,
//     } = selectOptions || {};

//     const handleClickOutside = useCallback((event) => {
//         if (event.target.matches(`.click-outside-handler${id}`)) {
//             return;
//         }

//         setIsOpen(false);
//     }, []);

//     const handleOptionClick = useCallback((selected) => {
//         dispatch({ type: selectActionType, selected });
//     }, [dispatch, selectActionType]);

//     useEffect(() => {
//         window.addEventListener("click", handleClickOutside);
//         return () => {
//             window.removeEventListener("click", handleClickOutside);
//         };
//     }, [handleClickOutside])

//     return (
//         <div className="dropdown-select-info">
//             <button
//                 onClick={() => setIsOpen((prevState) => !prevState)}
//                 className={`dropdown-select-info__btn click-outside-handler${id}`}
//             >
//                 <div className={`dropdown-select-info__btn-content click-outside-handler${id}`}>
//                     <div className={`dropdown-select-info__btn-subtitle click-outside-handler${id}`}>
//                         {title}
//                     </div>
//                     <div className={`dropdown-select-info__btn-title click-outside-handler${id}`}>
//                         {selected.label}
//                     </div>
//                 </div>
//                 <div className={`click-outside-handler${id}`}>
//                     {isOpen ? '-' : '+'}
//                 </div>
//             </button>
//             <div className={`dropdown-select-info__content ${isOpen ? 'dropdown-select-info__content--state_visible' : 'dropdown-select-info__content--state_invisible'}`}>
//                 <div className="dropdown-select-info__options">
//                     {
//                         options.map((option) => (
//                             <div
//                                 key={option.id}
//                                 className={`dropdown-select-info__option ${false ? 'dropdown-select-info__option--state_selected' : '' }`}
//                                 onClick={() => handleOptionClick(option)}
//                             >
//                                 <div className="dropdown-select-info__option-label">
//                                     {option.label}
//                                 </div>
//                                 {
//                                     option.image && <img src={option.image} alt="option" />
//                                 }
//                             </div>
//                         ))
//                     }
//                 </div>
//                 {
//                     description && <div className="dropdown-select-info__description">
//                         {description}
//                     </div>
//                 }
//             </div>
//         </div>
// )};

// export default DropdownOptionsSelect;
