import{_ as e,c as t,o as s,d as r}from"./app.033c03ff.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adding currency to screen dropdowns","slug":"adding-currency-to-screen-dropdowns","link":"#adding-currency-to-screen-dropdowns","children":[]},{"level":2,"title":"Adding currency to XCM calls","slug":"adding-currency-to-xcm-calls","link":"#adding-currency-to-xcm-calls","children":[]},{"level":2,"title":"Registering new assets on nodes","slug":"registering-new-assets-on-nodes","link":"#registering-new-assets-on-nodes","children":[]}],"relativePath":"ui/currency.md"}'),n={name:"ui/currency.md"},a=r('<h2 id="adding-currency-to-screen-dropdowns" tabindex="-1">Adding currency to screen dropdowns <a class="header-anchor" href="#adding-currency-to-screen-dropdowns" aria-hidden="true">#</a></h2><p>Each screen for XCM transfer has also a currency select dropdown. In order to add new currency search for the function that executes on &quot;mount&quot; meaning, that it will automatically fetch data once the screen is opening. Search for the comment &quot;Currencies we can transfer in&quot;. There is already a &quot;KSM&quot; currency defined. You can add yours under it. <img src="https://user-images.githubusercontent.com/55763425/188236673-d4689334-a274-4cff-8cbc-df3aaa1fc4c3.png" alt="carbon (1)"></p><h2 id="adding-currency-to-xcm-calls" tabindex="-1">Adding currency to XCM calls <a class="header-anchor" href="#adding-currency-to-xcm-calls" aria-hidden="true">#</a></h2><p>Adding new currency to Parachain XCM calls might require modification depending on Parachain. In this chapter, we are going to demonstrate the steps necessary to add a new currency to our network nodes. Our preconfigured Karura, Bifrost &amp; Pichiu nodes do not need any modifications, they should work out of the box with any currency if it is registered. If we had a node like a Basilisk for example we would have to do some modifications because Basilisk uses integer assetID asset selection in XCM calls compared to string selection used in our preconfigured nodes. Since ParaSpell is preconfigured to hold the symbol of the selected currency in the string, this would have to be fixed with simple if statements for each registered asset on Basilisk (if selectedCurrency == &quot;KSM&quot; then basiliskSelectedCur = 0).</p><h2 id="registering-new-assets-on-nodes" tabindex="-1">Registering new assets on nodes <a class="header-anchor" href="#registering-new-assets-on-nodes" aria-hidden="true">#</a></h2><p>There are multiple ways to do this. The first and simplest is to go to the asset pallet and click on &quot;Create&quot;. Make sure your selected account has sufficient permissions to create assets. <img src="https://user-images.githubusercontent.com/55763425/188266274-7e48317a-87fd-4c54-ab74-067b969d0037.png" alt="Screenshot from 2022-09-03 12-17-40"></p><p>If your new node has sudo pallet and assetRegistry pallet, the new asset can be registered via API call. Example of this type of registration done through Acala network which has sudo pallet by default can be seen below. <img src="https://user-images.githubusercontent.com/55763425/187018974-cfcbd387-510c-4dfb-b4e9-906342a55a9e.png" alt="Screenshot from 2022-08-27 08-57-58"><br>We can see, that assetRegistry pallet call has to be wrapped in sudo pallet. This will give us root rights to execute this type of call which usually can only be executed through governance. However if node does not have sudo pallet by default and has no option to add sudo pallet through network configuration or tag (eg. --dev in moonbeam) asset can be registered through the council. The first step is to navigate to the governance dropdown and select the democracy pallet. Next, click on submit preimage and create assetRegistry call. Make sure to copy the preimage hash before submitting the call. <img src="https://user-images.githubusercontent.com/55763425/187019267-527f0f61-1f14-4f23-a90c-14d6bfea9b59.png" alt="Screenshot from 2022-08-27 09-05-21"><br>Then navigate to council, motions and select propose external. Paste your preimage hash here and submit. <img src="https://user-images.githubusercontent.com/55763425/187019467-99be7f9e-9800-4872-8475-ec24c8d860db.png" alt="Screenshot from 2022-08-27 09-12-40"><br>Once the hash is submitted, it should appear in the democracy pallet under external. <img src="https://user-images.githubusercontent.com/55763425/187019553-75e051eb-e30d-4ab5-aa28-6e4c1ef66df4.png" alt="Screenshot from 2022-08-27 09-13-37"><br>Click on the fast track and submit a fast track. The referenda should open soon. You will be able to vote there. <img src="https://user-images.githubusercontent.com/55763425/188235914-6a69920b-d320-4b7c-b6a7-6d05d85d5d6e.png" alt="Screenshot from 2022-09-02 22-43-05"><br>After referenda passed we can observe network explorer with details about referenda. <img src="https://user-images.githubusercontent.com/55763425/188235911-c55d5bdc-7064-405f-aed0-e5955981677b.png" alt="Screenshot from 2022-09-02 23-08-46"><br>Now we just wait until dispatch is issued and the command executed. <img src="https://user-images.githubusercontent.com/55763425/188235904-ec7dbcbc-4fe3-47bb-b893-8b0010a015d8.png" alt="Screenshot from 2022-09-02 23-09-40"></p>',7),o=[a];function c(i,d,l,u,h,g){return s(),t("div",null,o)}const f=e(n,[["render",c]]);export{m as __pageData,f as default};
