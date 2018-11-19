//
//  ViewController.swift
//  homework2
//
//  Created by YunHee Lee on 2018. 5. 2..
//  Copyright © 2018년 YunHee Lee. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource {
    
    //0. 위 UITableViewDataSource 입력
    
    
    
    //1. 어레이 입력 - 출력될 내용
    
    let data:[String] = ["Item1", "Item2", "Item3"]
    
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
        
    }
    
    
    
    // 2. numberOfRowsInSection - 어레이를 카운팅
    
    // return 5 라고하면 5개만 리스트 된다.
    
    
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        return data.count
        
    }
    
    
    
    //3.cellForRowAt - 셀에 나올 내용 선택
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        
        
        
        //4.dequeueReusableCell 입력후, 스토리보드에서 "cell" 입력(맨위 이미지 참조)
        
        cell.textLabel?.text = data[indexPath.row]
        
        return cell
        
    }
    
    
    
    override func didReceiveMemoryWarning() {
        
        super.didReceiveMemoryWarning()
        
        // Dispose of any resources that can be recreated.
        
    }
    
}
