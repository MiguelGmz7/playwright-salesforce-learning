# Drop down
The locator of the dropdown would look like this 
```HTML
<select class="product_sort_container" aria-label="Sort products" data-test="product-sort-container">
<option value="az">Name (A to Z)</option>
<option value="za">Name (Z to A)</option>
<option value="lohi">Price (low to high)</option>
<option value="hilo">Price (high to low)</option>
</select>
```

- A Select is the drop down element
- Every option is the option of our dropdown 

## Playwright code 
```HTML
const dropdown = await page.locator("select.product_sort_container");

await dropdown.selectOption("lohi");
```

# Dropdown Salesforce 
