<script>
    import { getContext } from 'svelte';
  
    let childMessage = getContext('message');
    let contextTab = getContext('selectedParentTab')
    let contextOption = getContext('selectedParentOption')

  </script>
  <h4>I am a child</h4>
  
  <p>The message from the parent is: {childMessage}</p>
  <p>Selected parent tab : {$contextTab.selectedTab}</p>
  <p>Selected parent option: {$contextOption.selectedOption}</p>
  