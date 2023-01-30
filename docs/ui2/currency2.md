## Adding currency to screen dropdowns
Each screen for XCM transfer has also a currency select dropdown. In order to add new currency search for store and line where there is manually inserted "KSM" token for node "Pichiu". Then add following line.
![carbon (3)](https://user-images.githubusercontent.com/55763425/215524006-f7d1d4d3-3cc9-4bcb-833e-c77b2cc01889.png)
## Adding currency to XCM calls
Adding new currency to Parachain XCM calls might require modification depending on Parachain. In this chapter, we are going to demonstrate the steps necessary to add a new currency to our network nodes. Our preconfigured Karura, Bifrost & Pichiu nodes do not need any modifications, they should work out of the box with any currency if it is registered. If we had a node like a Basilisk for example we would have to do some modifications because Basilisk uses integer assetID asset selection in XCM calls compared to string selection used in our preconfigured nodes. Since ParaSpell is preconfigured to hold the symbol of the selected currency in the string, this would have to be fixed with simple if statements for each registered asset on Basilisk (if selectedCurrency == "KSM" then basiliskSelectedCur = 0).
## Registering new assets on nodes
There are multiple ways to do this. The first and simplest is to go to the asset pallet and click on "Create". Make sure your selected account has sufficient permissions to create assets.
![Screenshot from 2022-09-03 12-17-40](https://user-images.githubusercontent.com/55763425/188266274-7e48317a-87fd-4c54-ab74-067b969d0037.png)


If your new node has sudo pallet and assetRegistry pallet, the new asset can be registered via API call. Example of this type of registration done through Acala network which has sudo pallet by default can be seen below.
![Screenshot from 2022-08-27 08-57-58](https://user-images.githubusercontent.com/55763425/187018974-cfcbd387-510c-4dfb-b4e9-906342a55a9e.png)
<br >We can see, that assetRegistry pallet call has to be wrapped in sudo pallet. This will give us root rights to execute this type of call  which usually can only be executed through governance. However if node does not have sudo pallet by default and has no option to add sudo pallet through network configuration or tag (eg. --dev in moonbeam) asset can be registered through the council. The first step is to navigate to the governance dropdown and select the democracy pallet. Next, click on submit preimage and create assetRegistry call. Make sure to copy the preimage hash before submitting the call.
![Screenshot from 2022-08-27 09-05-21](https://user-images.githubusercontent.com/55763425/187019267-527f0f61-1f14-4f23-a90c-14d6bfea9b59.png)
<br >Then navigate to council, motions and select propose external. Paste your preimage hash here and submit.
![Screenshot from 2022-08-27 09-12-40](https://user-images.githubusercontent.com/55763425/187019467-99be7f9e-9800-4872-8475-ec24c8d860db.png)
<br >Once the hash is submitted, it should appear in the democracy pallet under external. 
![Screenshot from 2022-08-27 09-13-37](https://user-images.githubusercontent.com/55763425/187019553-75e051eb-e30d-4ab5-aa28-6e4c1ef66df4.png)
<br>Click on the fast track and submit a fast track. The referenda should open soon. You will be able to vote there.
![Screenshot from 2022-09-02 22-43-05](https://user-images.githubusercontent.com/55763425/188235914-6a69920b-d320-4b7c-b6a7-6d05d85d5d6e.png)
<br>After referenda passed we can observe network explorer with details about referenda.
![Screenshot from 2022-09-02 23-08-46](https://user-images.githubusercontent.com/55763425/188235911-c55d5bdc-7064-405f-aed0-e5955981677b.png)
<br>Now we just wait until dispatch is issued and the command executed.
![Screenshot from 2022-09-02 23-09-40](https://user-images.githubusercontent.com/55763425/188235904-ec7dbcbc-4fe3-47bb-b893-8b0010a015d8.png)

