package com.example.groupproject.message;

public class ResponseFile {
    private String docName;
  private String url;
  private String docType;
  private long size;

  public ResponseFile(String docName, String url, String docType, long size) {
    this.docName = docName;
    this.url = url;
    this.docType = docType;
    this.size = size;
  }

  public String getDocName() {
    return docName;
}

public void setDocName(String docName) {
    this.docName = docName;
}
  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getDocType() {
    return docType;
}

public void setDocType(String docType) {
    this.docType = docType;
}

  public long getSize() {
    return size;
  }

  public void setSize(long size) {
    this.size = size;
  }
}

