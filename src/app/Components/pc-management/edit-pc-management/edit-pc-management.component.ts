import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PartRequestDTO } from '../../../Classes/PartRequestDTO';
import { Parts } from '../../../Classes/Parts';
import { PCListDTO } from '../../../Classes/PCListDTO';
import { ProductCategories } from '../../../Classes/ProductCategories';
import { PartService } from '../../../Services/part.service';
import { PCService } from '../../../Services/pc.service';

@Component({
  selector: 'app-edit-pc-management',
  templateUrl: './edit-pc-management.component.html',
  styleUrls: ['./edit-pc-management.component.css']
})
export class EditPcManagementComponent implements OnInit {

  showEditPCPopup: boolean;
  pc: PCListDTO;
  categoryList: ProductCategories[];
  processorList: Parts[];
  motherboardList: Parts[];
  ramList: Parts[];
  graphicardList: Parts[];
  powerSupplyList: Parts[];
  casingList: Parts[];
  storageList: Parts[];
  PCForm: FormGroup;
  submitted = false;
  @Output() closeEmitier = new EventEmitter();
  pcName: string;
  pcPrice: number;
  selectedCategory: number;
  selectedProcessor: number;
  selectedMotherboard: number;
  selectedRam: number;
  selectedGraphicard: number;
  selectedPowerSupply: number;
  selectedCasing: number;
  selectedStorage: number;
  selectedPCID: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  fileToUpload1: File = null;
  fileToUpload2: File = null;
  fileToUpload3: File = null;
  fileToUpload4: File = null;
  @ViewChild('image1', { static: true }) image1;
  @ViewChild('image2', { static: true }) image2;
  @ViewChild('image3', { static: true }) image3;
  @ViewChild('image4', { static: true }) image4;  

  constructor(private formBuilder: FormBuilder, private partService: PartService, private pcService: PCService, private toastr: ToastrService) {
    this.showEditPCPopup = false;
    this.pc = new PCListDTO();
    this.PCForm = this.formBuilder.group({
      ProductCategory: ['', Validators.required],
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Processor: ['', Validators.required],
      Motherboard: ['', Validators.required],
      RAM: ['', Validators.required],
      GraphicCard: ['', Validators.required],
      PowerSupply: ['', Validators.required],
      Casing: ['', Validators.required],
      Storage: ['', Validators.required],
      //Image1: ['', Validators.required],
      //Image2: ['', Validators.required],
      //Image3: ['', Validators.required],
      //Image4: ['', Validators.required],
    });
    this.processorList = [];
    this.motherboardList = [];
    this.ramList = [];
    this.graphicardList = [];
    this.powerSupplyList = [];
    this.casingList = [];
    this.storageList = [];
    this.categoryList = [];
    this.imageUrl1 = './assets/images/blank-profile.jpg';
    this.imageUrl2 = './assets/images/blank-profile.jpg';
    this.imageUrl3 = './assets/images/blank-profile.jpg';
    this.imageUrl4 = './assets/images/blank-profile.jpg';
  }

  ngOnInit(): void {
    this.PCForm = this.formBuilder.group({
      ProductCategory: ['', Validators.required],
      Name: ['', Validators.required],
      Price: ['', Validators.required],
      Processor: ['', Validators.required],
      Motherboard: ['', Validators.required],
      RAM: ['', Validators.required],
      GraphicCard: ['', Validators.required],
      PowerSupply: ['', Validators.required],
      Casing: ['', Validators.required],
      Storage: ['', Validators.required],
      //Image1: ['', Validators.required],
      //Image2: ['', Validators.required],
      //Image3: ['', Validators.required],
      //Image4: ['', Validators.required],
    });
    this.getCategoriesList();
    this.getProcessorsList();
    this.getRAMList();
    this.getStorageList();
    this.getPowerSupplyList();
    this.getMotherboardList();
    this.getGraphicCardsList();
    this.getCasingsList();
  }

  getCategoriesList() {
    this.pcService.GetPCCategories("PC", "GetAllPCCategories").subscribe(
      (data: any) => {
        if (data) {
          this.categoryList = data;
        } else
          this.toastr.error('PC', 'Error occured while fetching data.');
      });
  }

  getProcessorsList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "Processor";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.processorList = data;
        } else
          this.toastr.error('Processors', 'Error occured while fetching data.');
      });
  }

  getRAMList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "RAM";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.ramList = data;
        } else
          this.toastr.error('RAM', 'Error occured while fetching data.');
      });
  }

  getStorageList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "Storage";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.storageList = data;
        } else
          this.toastr.error('Storage', 'Error occured while fetching data.');
      });
  }

  getPowerSupplyList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "PowerSupply";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.powerSupplyList = data;
        } else
          this.toastr.error('PowerSupply', 'Error occured while fetching data.');
      });
  }

  getMotherboardList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "Motherboard";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.motherboardList = data;
        } else
          this.toastr.error('Processors', 'Error occured while fetching data.');
      });
  }

  getGraphicCardsList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "GraphicCard";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.graphicardList = data;
        } else
          this.toastr.error('GraphicCards', 'Error occured while fetching data.');
      });
  }

  getCasingsList() {
    let partRequest: PartRequestDTO = new PartRequestDTO();
    partRequest.RequestedPart = "Casing";
    this.partService.GetPartsList("Part", "GetPartList", partRequest).subscribe(
      (data: any) => {
        if (data) {
          this.casingList = data;
        } else
          this.toastr.error('Casings', 'Error occured while fetching data.');
      });
  }

  onSubmitForm() {
    this.submitted = true;
    if (this.PCForm?.invalid) {
      if (this.PCForm.controls['Image1'].invalid && (this.imageUrl1 && this.imageUrl1 != "./assets/images/blank-profile.jpg")) {
        if (this.PCForm.controls['Image2'].invalid && (this.imageUrl2 && this.imageUrl2 != "./assets/images/blank-profile.jpg")) {
          if (this.PCForm.controls['Image3'].invalid && (this.imageUrl3 && this.imageUrl3 != "./assets/images/blank-profile.jpg")) {
            if (this.PCForm.controls['Image4'].invalid && (this.imageUrl4 && this.imageUrl4 != "./assets/images/blank-profile.jpg")) {

            } else
              return;
          } else
            return;
        } else
          return;
      } else
        return;
    }
    let category = this.categoryList.filter(x => x.Id == this.selectedCategory);
    if (category && category.length > 0) {
      this.pc.ProductCategory = category[0];
    }
    this.pc.Name = this.pcName;
    this.pc.Price = this.pcPrice;
    this.pc.Id = this.selectedPCID;
    let processor = this.processorList.filter(x => x.Id == this.selectedProcessor);
    if (processor && processor.length > 0) {
      this.pc.Processor = processor[0];
    }
    let motherboard = this.motherboardList.filter(x => x.Id == this.selectedMotherboard);
    if (motherboard && motherboard.length > 0) {
      this.pc.Motherboard = motherboard[0];
    }
    let ram = this.ramList.filter(x => x.Id == this.selectedRam);
    if (ram && ram.length > 0) {
      this.pc.RAM = ram[0];
    }
    let graphicCard = this.graphicardList.filter(x => x.Id == this.selectedGraphicard);
    if (graphicCard && graphicCard.length > 0) {
      this.pc.GraphicCard = graphicCard[0];
    }
    let storage = this.storageList.filter(x => x.Id == this.selectedStorage);
    if (storage && storage.length > 0) {
      this.pc.Storage = storage[0];
    }
    let casing = this.casingList.filter(x => x.Id == this.selectedCasing);
    if (casing && casing.length > 0) {
      this.pc.Casing = casing[0];
    }
    let powerSupply = this.powerSupplyList.filter(x => x.Id == this.selectedPowerSupply);
    if (powerSupply && powerSupply.length > 0) {
      this.pc.PowerSupply = powerSupply[0];
    }
    let formData = new FormData();
    formData.append('ProductCategory', JSON.stringify(this.pc.ProductCategory));
    formData.append('Processor', JSON.stringify(this.pc.Processor));
    formData.append('Motherboard', JSON.stringify(this.pc.Motherboard));
    formData.append('RAM', JSON.stringify(this.pc.RAM));
    formData.append('GraphicCard', JSON.stringify(this.pc.GraphicCard));
    formData.append('Storage', JSON.stringify(this.pc.Storage));
    formData.append('Casing', JSON.stringify(this.pc.Casing));
    formData.append('PowerSupply', JSON.stringify(this.pc.PowerSupply));
    formData.append('Name', JSON.stringify(this.pc.Name));
    formData.append('Price', JSON.stringify(this.pc.Price));
    formData.append('Id', JSON.stringify(this.pc.Id));
    formData.append('image1', (this.image1.nativeElement.files[0])? this.image1.nativeElement.files[0]: null);
    formData.append('image2', (this.image2.nativeElement.files[0])? this.image2.nativeElement.files[0]: null);
    formData.append('image3', (this.image3.nativeElement.files[0])? this.image3.nativeElement.files[0]: null);
    formData.append('image4', (this.image4.nativeElement.files[0])? this.image4.nativeElement.files[0]: null);


    this.pcService.PostPCDetails("PC", "UpdatePCDetail", formData).subscribe(
      (data: any) => {
        if (data) {
          this.onReset();
          this.toastr.success('PC', 'PC Edited successfully.');
          this.CloseEditPCPopup();
        } else {
          this.toastr.error('PC', 'Error Occured');
        }
      }, (error: any) => {
        this.toastr.error('PC', 'Error Occured');
      });
  }

  CloseEditPCPopup() {
    this.closeEmitier.emit(false);
  }
  onReset() {
    this.submitted = false;
    this.PCForm?.reset();
  }
  onSelectFile1(file: FileList) {
    this.fileToUpload1 = file.item(0);
    if (!this.checkFileCompatibility(this.fileToUpload1)) {
      return;
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl1 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload1);
  }
  onSelectFile2(file: FileList) {
    this.fileToUpload2 = file.item(0);
    if (!this.checkFileCompatibility(this.fileToUpload2)) {
      return;
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload2);
  }
  onSelectFile3(file: FileList) {
    this.fileToUpload3 = file.item(0);
    if (!this.checkFileCompatibility(this.fileToUpload3)) {
      return;
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl3 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload3);
  }
  onSelectFile4(file: FileList) {
    this.fileToUpload4 = file.item(0);
    if (!this.checkFileCompatibility(this.fileToUpload4)) {
      return;
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl4 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload4);
  }
  checkFileCompatibility(file: File) {
    let ext: string;
    if (file?.name) {
      ext = file?.name.split('.')[1];
    }
    if (ext?.toLowerCase() != "png" && ext?.toLowerCase() != "jpg" && ext?.toLowerCase() != "jpeg") {
      this.toastr.error('Image', 'Only PNG or JPG format is supported.');
      return false;
    }
    if (file && !file.type.includes("image")) {
      this.toastr.error('Image', 'Please upload image only.');
      return false;
    }
    //let sizeInBytes: number = file.size;
    //let originalSize: string = this.bytesToSize(sizeInBytes)
    //let spilited = originalSize.split(' ');
    //let unit, number; 
    //if (spilited && spilited.length > 1) {
    //  number = Number(spilited[0]);
    //  unit = spilited[1];
    //}
    //if (number > 10) {
    //  this.toastr.error('Image', 'File size must be smaller than 10 MB');
    //  return false;
    //}
    return true;
  }
  bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
