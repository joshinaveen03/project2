var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Add Item

form.addEventListener('submit',addItem);

//Delete event

itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
//Create element

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));

//Create Button

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

}

//remove function

function removeItem(e)
{
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
        
    }
}