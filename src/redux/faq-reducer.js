const faqs = [
    {
        title: 'Where is PosterHaus located?',
        id: '1',
        descriptionFields: [
            {
                id: '1',
                label: 'Our corporate office is located in Toronto, Ontario, Canada where our production and fulfillment facility is also located.',
            }
        ],
    },
    {
        title: 'What type of art should customers expect when visiting PosterHaus?',
        id: '2',
        descriptionFields: [
            {
                id: '1',
                label: 'We offer a curated selection of stunning art photography in a variety of styles that are not available for sale anywhere else online. Available art are all originals, available in a wide variety of styles and sourced directly from the artists.',
            }
        ],
    },
    {
        id: '3',
        title: 'Why does PosterHaus only offer photography?',
        descriptionFields: [
            {
                id: '1',
                label: 'Members of our team possess a broad range of art, design and photography backgrounds which has enabled us to develop a unique platform that is focused on art photography. We don’t want to be everything to everyone; instead, our core focus is to source curated works of photographic art directly from the artists and offer them for sale to customers who are looking for something unique that fits nicely with the décor in their home, condo, office, or retail space.',
            }
        ],
    },
    {
        id: '4',
        title: 'How does PosterHaus control the quality of the art available for sale?',
        descriptionFields: [
            {
                id: '1',
                label: 'We only work with like-minded professionals who follow the highest technical and ethical standards and are as passionate about art as we are.',
            }
        ],
    },
    {
        id: '5',
        title: 'How does PosterHaus instill confidence to their customers?',
        descriptionFields: [
            {
                id: '1',
                label: 'We are just as passionate about art as our artists are about creating it. We don’t accept things that are ‘ok’ or ‘good enough’ and that is how we have also developed our shopping experience. All of the art listed includes a realistic preview and a thorough description of the artist.',
            },
            {
                id: '2',
                label: 'In an effort to provide a seamless purchasing experience, we offer museum quality framing option when purchasing, worldwide shipping and an uncomplicated return policy.',
            }
        ],
    },
    {
        id: '6',
        title: 'What are the options to pay for my order?',
        descriptionFields: [
            {
                id: '1',
                label: 'Currently we accept Visa, Mastercard, American Express, Apple Pay, Google Pay, PayPal and we have also partnered with Sezzle that allows shoppers to purchase today and make 4 interest-free payments over 6 weeks!',
            }
        ],
    },
    {
        id: '7',
        title: 'Is it secure to purchase from your website?',
        descriptionFields: [
            {
                id: '1',
                label: "Yes, it's secure to purchase from our website. During the order process, SSL encryption is applied to protect all the data and information you provided for the order.",
            }
        ],
    },
    {
        id: '8',
        title: 'Can I place my order over the phone?',
        descriptionFields: [
            {
                id: '1',
                label: 'No. All orders must be placed online.',
            }
        ],
    },
    {
        id: '9',
        title: "I'm buying a gift. Will the purchase price appear on the invoice with my order?",
        descriptionFields: [
            {
                id: '1',
                label: 'You can send your order as a gift. We do not include any dollar amounts on the invoice that will be included with your purchase.',
            }
        ],
    },
    {
        id: '10',
        title: "Can I include a gift message with my purchase?",
        descriptionFields: [
            {
                id: '1',
                label: 'Unfortunately, you cannot include a gift message with your purchases from PosterHaus.',
            }
        ],
    },
    {
        id: '11',
        title: "Does PosterHaus ship worldwide?",
        descriptionFields: [
            {
                id: '1',
                label: 'Yes. We primarily ship within North America using UPS, however if you can receive a package via DHL, UPS or FedEx, then we can ship to you! International shipments are accepted and will be quoted on a case-by-case basis.',
            }
        ],
    },
    {
        id: '12',
        title: "When will my order ship?",
        descriptionFields: [
            {
                id: '1',
                label: 'Products require 3-10 business days to print and manufacture before shipping, depending on the product. Products will ship from our Toronto manufacturing facility once they have passed our three-level quality control requirement.',
            }
        ],
    },
    {
        id: '13',
        title: "Where is my order?",
        descriptionFields: [
            {
                id: '1',
                label: "As soon as your order ships, we'll send you an e-mail confirmation with a tracking number included in the e-mail. We send the e-mail to the e-mail address that you provided when you placed your order.",
            },
            {
                id: '2',
                label: 'If you want to check on the status of your order at any time, just login to your account here on PosterHaus and then click on your <b>"purchases"</b> page.',
            },
        ],
    },
    {
        id: '14',
        title: "What is your cancellation / return policy?",
        descriptionFields: [
            {
                id: '1',
                label: "If you're not happy with a purchase that you made on PosterHaus.com, for any reason, you can return it to us within 30 days of the order date. As soon as it arrives, we'll issue a full refund for the entire purchase price.",
            },
            {
                id: '2',
                label: 'Please note — we do not reimburse the outgoing or return shipping charges. To initiate a return, please go to the <a href="#">Returns</a> page.',
            },
        ],
    },
    {
        id: '15',
        title: "Do you offer wholesale prices?",
        descriptionFields: [
            {
                id: '1',
                label: 'Yes, we offer wholesale prices. If you are planning to purchase 50 or more of the same print, we will be able to offer a bulk-purchase discount. Please contact us regarding your bulk purchase using the following page: <a href="#">Trade/Vendor</a>',
            },
            {
                id: '2',
                label: 'In order to provide you with a quote, we need to know exactly what you intend to purchase. Please provide links to all of the artwork pages and include detailed information about the print sizes, frames, mats, etc.',
            },
        ],
    },
    {
        id: '16',
        title: "Can I pay with a purchase order?",
        descriptionFields: [
            {
                id: '1',
                label: 'All orders must be paid for using a credit card or Paypal.',
            },
            {
                id: '2',
                label: 'If you will be purchasing more than $10,000 worth of products from PosterHaus and need to make special payment arrangements, please contact us using the following form: <a>Trade/Vendor</a>',
            },
        ],
    },
    {
        id: '17',
        title: "What happens if my order is damaged during shipment?",
        descriptionFields: [
            {
                id: '1',
                label: "We replace it! We do our absolute best to package your order so that it arrives in perfect condition. Unfortunately, we can't control the delivery drivers who will be handling the order along the way.",
            },
            {
                id: '2',
                label: " If your order arrives damaged, simply tale a few photos and contact us using the form on the <a href='#'>Returns</a> page, and we'll get a replacement order into production. Don't worry — damage rarely occurs. We wouldn't be in business for very long if it did!",
            },
        ],
    },
    {
        id: '18',
        title: "To frame or not to frame?",
        descriptionFields: [
            {
                id: '1',
                label: "To reduce the cost of your delivery fee, we recommend the shipment of our items in an unframed state. We securely package our art to guarantee that they will arrive in pristine condition. And of course, we also provide ‘framed under glass’ options and would be thrilled to take care of the framing on our end.",
            },
            {
                id: '2',
                label: "Please note — prints are delicate works on paper that can be susceptible to light damage. For that reason, we always recommend that you frame photographs purchased under the best UV-protective covering that your budget allows.",
            },
        ],
    },
    {
        id: '18',
        title: "When I'm configuring my order, what's the difference between the ‘image size’ and the ‘overall size’?",
        descriptionFields: [
            {
                id: '1',
                label: 'The image size is the actual size of the image. If it says 8" x 10", for example, then the image will actually be printed to be 8" x 10". The overall size includes any extra material that surrounds the image (e.g. mats, frames, white border, etc.)'
            },
            {
                id: '2',
                label: 'If you order a print without a mat or frame, for example, we automatically apply a white border around all four sides. Paper prints get a 1" white border, unless otherwise specified. The added border makes it easier for you to mat, frame, and/or stretch your print on your own.',
            },
            {
                id: '3',
                label: 'If you order an 8" x 10" paper print without a mat or frame, the image size is going to be 8" x 10", and the overall size is going to be 10" x 12".',
            },
            {
                id: '4',
                label: 'If you order a print with a mat or frame, then the overall size will be equal to the image size + the width of the mat (x2) + the width of the frame (x2) — a slight overlap where the mat overlays the print.',
            },
        ],
    },
    {
        id: '19',
        title: "Can I hang my prints in a bathroom?",
        descriptionFields: [
            {
                id: '1',
                label: "It depends. Framed prints will work fine in a bathroom. Just make sure that you're not exposing them to prolonged periods of high moisture from long, hot showers. Unframed prints may distort and/or discolour when exposed to high levels of humidity and moisture.",
            },
        ],
    },
    {
        id: '20',
        title: "Can I hang my prints outside?",
        descriptionFields: [
            {
                id: '1',
                label: "Unfortunately you cannot hang your prints outside.",
            },
        ],
    },
];

const initialState = {
    faqs,
};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};



export default faqReducer;
