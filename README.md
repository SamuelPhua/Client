# Flour Power

Flour Power is a homegrown bakery in Singapore who specialises in cookie creations. Founded in 2016, they are also a social enterprise that advocates for inclusive practices in the workplace and society at large. As such, they work alongside individuals with special needs or those recovering from mental illness to create their delectable bakes.

As part of the UX Team's project, they have came up with a protoype of revamping the website, so as to create and raise more awareness for Flour Power and their mission. We, a team of 5, have received the final protoype from UX Team and have endeavour to build out a working application closely aligned to the final prototype.

In this application, a user will be able to navigate the various pages to understand more about Flour Power and its offerings and moreso, to browse the delectable bakes available for purchase.

## Technologies Used

1. Built using React, Express, MongoDB and Node
<ul>
   <li>CRUD functions</li>
   <li>React Router to create Checkout, Enquiry Form and Products pages</li>
   <li>useState hooks to track states</li>
   <li>useContext hooks to read and subscribe to states and functions</li>
</ul>

2. Tailwind CSS and React Icons for styling

3. React Slick for carousels on HomePage and About Us pages

## Initial Discussions

![msg319094010-305882](https://user-images.githubusercontent.com/100138598/215382931-89f94bf7-ed34-467c-9f09-b2c4b2b48ed4.jpg)

## User Stories

We have 2 main groups of users. In general, users should be able to:

1. Navigate through the various pages via the navbar

2. Interact with the website via buttons that bring them to relevant sections of other pages

The first group are users who are shopping for cookies and would like a fuss free shopping experience through the website. To add on, they should be able to:

3. Browse all bakes available for purchases

4. Select various offerings for each bake, such as specific packaging, weight and quantity of some cookies

5. View the cart of what has been added so far

6. Proceed to checkout pages

7. Complete pertinent information in checkout forms such as delivery address, delivery methods

8. Select payment methods and receive a confirmation upon success

The other group of users are people who are interested in bulk orders or customization options. They would need a clear direction to information they need and quick access to send out enquiry requests for their purchase. They should be able to:

3. Understand the options available for bulk orders, as well as customization examples

4. Guided to a comprehensive enquiry form that cater to their needs

## Hierarchy

![hierachy](https://user-images.githubusercontent.com/118900713/219584574-2169620f-2c64-4e77-80bb-84ecdc121f11.svg)
<!-- ![Checkout component hierarchy](./local_images/Checkout_Hierarchy.png) -->

## General Approach

The backend comprises of product information that are available to the users, as well as user inputs that are collected upon checkout and submission of enquiry form.

Backend
<ul>
   <li>Product: contains product details with get all and get 1 product for the Shop & Product pages</li>
   <li>Checkout: contains checkout information created by the user, including delivery information, payment options & cart added by them.</li>
   <li>Enquiry Form: contains enquiry details provided by the user in the Contact Us page.</li>
</ul>

The frontend guides the user to navigate between general information, shopping of individual cookies for purchase and enquiry form. We split the components into 3 kinds - common, static and dynamic.

1. Common components:
<ul>
   <li>Shipping information</li>
   <li>Navbar: Home (logo), Shop, About Us, Bulk Orders, Contact Us, Cart (icon)</li>
   <li>Footer</li>
   <li>Banner: display page title with full width background image</li>
   <li>ButtonOrange (for submitting)</li>
   <li>ButtonWhite (for toggling options)</li>
   <li>ButtonSelected (for selected option)</li>
   <li>ButtonDisabled (for disabled option)</li>
</ul>

2. Pages/components for general information:
<ul>
   <li>Home</li>
   <li>About Us</li>
   <li>Bulk Order</li>
</ul>

3. Pages/components with more user interactions and backend communication:
<ul>
   <li>Shop</li>
   <li>Product</li>
   <li>Cart</li>
   <li>Checkout</li>
   <li>Contact Us</li>
</ul>

Here are some snapshots of the interactive pages:
| | | |
|:-------------------------:|:-------------------------:|
|<img width="1604" alt="shop all page" src="https://user-images.githubusercontent.com/118900713/219595257-ba30626e-e2ee-4333-9d43-f7f434368e96.png">  Shop |  <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://user-images.githubusercontent.com/118900713/219595281-830a504f-9a7d-41ab-8eaa-59ac8110ffc9.png">|<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://user-images.githubusercontent.com/118900713/219595295-6c9af153-06a3-4e48-91e5-e1df5a769f7a.png">|
|<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://user-images.githubusercontent.com/118900713/219595305-42bc8a17-0949-42e5-9b8c-ab3ec4e516d0.png">  |  <img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://user-images.githubusercontent.com/118900713/219595319-141f0319-096a-42be-a030-35e6dc41cbf5.png">|<img width="1604" alt="screen shot 2017-08-07 at 12 18 15 pm" src="https://user-images.githubusercontent.com/118900713/219595336-a216f399-4367-4b1e-800a-698f33bd3d2f.png">|

## Challenges

Bulk of the challenge of this project stems from the e-commerce requirement of having a cart for checkout. Here is a summary of considerations required for the cart and checkout interactions:

1. Cart:

<ul>
   <li>Product component: requires all the options that are selectable by the user. In order to do that, multiple react states are required to keep track of what are the options clicked and information to rerender when selected, i.e., product price and product image.</li>

   <li>ProductPopup component: after the user has decided on the options, adding to cart button will trigger a pop up that displays the added cart information.</li>

   <li>Cart component: after navigating to the view cart page, the added product should be combined with existing added products if the options are identical.</li>

   <li>Cart component: the product's quantity can also be updated on the view cart page, and removed completely if the user desires.</li>
</ul>

2. Checkout:

<ul>

   <li>Checkout pages progress bar</li>
   
</ul>   

## Limitations & Future work

Due to the time frame of 5 days given to complete this project, there were a few items which we would love to complete but was unable to do so. Refer to the following:

1. In the "Shop" page, some products' quantity, packaging and price have been mocked up Hence to align to reality, we would need to obtain the exact offerings offered by the shop and replace them.

2. The application of 'Gift card or discount code' is currently not enabled.

3. The payment methods listed are not connected to any payment gateways.

4. There is no client model authentication where client can log in to upload / edit product offerings.

5. Images are not encoded in the database and fetched for display yet.
