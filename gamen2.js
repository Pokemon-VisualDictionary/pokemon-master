function search() {
    const searchQuery = document.getElementById('searchQuery').value.toLowerCase();
        fetch('poke.csv')
            .then(response => response.text())
            .then(data => {
                    const rows = data.split('\n');
                    const searchResults = rows.filter(row => row.toLowerCase().includes(searchQuery));
                    document.getElementById('searchResults').innerHTML = '';
                    searchResults.forEach(result => {
                        const columns = result.split(',');
                        const li = document.createElement('li');
                        const link = document.createElement('a');
                        link.textContent = columns[1]; // 最初の列をリンクテキストとして使用する
                        link.href = columns[2]; // 次の列をリンク先URLとして使用する
                        link.target = "_blank"; // 新しいウィンドウまたはタブで開く
                        li.appendChild(link);
                        document.getElementById('searchResults').appendChild(li);
                    });
                })
            .catch(error => console.error('Error fetching CSV file:', error));
}
